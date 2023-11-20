import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "./../assets/api/axios"

export const getBerita = createAsyncThunk("berita/getBerita", async (page) => {
    try {
        const res = await axios.get("/api/berita?page="+page)
        return res.data
    } catch (err) {
        console.log(err)
    }
})

export const getDetail = createAsyncThunk("berita/getDetail", async (slug) => {
    try {
        const res = await axios.get("/api/berita/bySlug/" + slug)
        console.log(res);
        return res.data
    } catch (err) {
        console.log(err)
    }
})

export const storeBerita = createAsyncThunk("berita/store", async (data) => {
    try {
        const res = await axios.post("/api/berita", data)
        return res.data
    } catch (err) {
        console.log(err)
    }
})

const beritaSlice = createSlice({
    name: "berita",
    initialState: {
        data_berita: null,
        loading_berita: false,
        info: "",
        page: 1,
        meta: {},
        detail_berita: {},
        new_detail: {},
        old_detail: {},
        last_detail: null,
        first_detail: null,
    },
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload
        },
    },
    extraReducers: {
        [getDetail.pending.toString()](state) {
            state.loading_berita = true
            state.info = "menunggu"
        },
        [getDetail.fulfilled.toString()](state, action) {
            state.loading_berita = false
            state.detail_berita = action.payload.data
            state.new_detail = action.payload.new
            state.old_detail = action.payload.old
            state.first_detail = action.payload.first
            state.last_detail = action.payload.last
        },
        [getDetail.rejected.toString()](state) {
            state.loading_berita = false
            state.info = "ditolak"
        },

        [getBerita.pending.toString()](state) {
            state.loading_berita = true
            state.info = "menunggu"
        },
        [getBerita.fulfilled.toString()](state, action) {
            state.loading_berita = false
            state.data_berita = action.payload.data
            state.info = action.payload.info
            state.meta = action.payload.meta
        },
        [getBerita.fulfilled.toString()](state, action) {
            state.loading_berita = false
            state.data_berita = action.payload.data
            state.info = action.payload.info
            state.meta = action.payload.meta
        },
        [getBerita.rejected.toString()](state) {
            state.loading_berita = false
            state.info = "ditolak"
        },
        [storeBerita.pending.toString()](state) {
            state.loading_berita = true
            state.info = ''
        },
        [storeBerita.fulfilled.toString()](state, action) {
            state.loading_berita = false
            state.info = action.payload.info
        },
        [storeBerita.rejected.toString()](state) {
            state.loading_berita = false
            state.info = "ditolak"
        },
    },
})

export const { setPage } = beritaSlice.actions

export default beritaSlice.reducer
