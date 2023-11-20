import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "../assets/api/axios"
import swal  from 'sweetalert';
export const storeKategori = createAsyncThunk('kategori/storeKategori', async (data) => {
    try {
        const res = await axios.post("/api/kategori", data)
        return res.data
    } catch (err) {
        console.log(err);
    }
})

export const getKategori = createAsyncThunk("kategori/getKategori", async (page) => {
    const res = await axios.get("/api/kategori?page="+page)
    // console.log(res.data)
    return res.data
})


const kategoriSlice = createSlice({
    name: "kategori",
    initialState: {
        data_kategori: null,
        loading_kategori: false,
        info: '',
        page: 1,
        meta: {}
    },
    reducers: {
        setPage: (state, action) => {
            state.page =  action.payload
        },
    },
    extraReducers: {
        [getKategori.pending](state) {
            state.loading_kategori = true
        },
        [getKategori.fulfilled](state, { payload }) {
            state.loading_kategori = false
            state.data_kategori = payload.data
            state.meta = payload.meta
        },
        [getKategori.rejected](state) {
            state.loading_kategori = false
        },
        [storeKategori.pending](state) {
            state.loading_kategori = true
            state.info = ''
        },
        [storeKategori.fulfilled](state, action) {
            state.loading_kategori = false
            state.info = action.payload
            swal("Created!", "Menambahkan Data Kategori", "success")
        },
        [storeKategori.rejected](state) {
            state.loading_kategori = false
            state.info = 'gagal'
        },
    },
})

export const { setPage } = kategoriSlice.actions
export default kategoriSlice.reducer
