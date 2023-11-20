import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "./../assets/api/axios"

export const getKeranjang = createAsyncThunk("keranjang/getKeranjang", async () => {
    try {
        await axios.get("/api/keranjang").then((res) => {
            res.data.data
        })
    } catch (err) {
        console.log(err)
    }
})

export const bayarLangsung = createAsyncThunk("keranjang/bayarLangsung", async (data) => {
    try {
        axios.post("/api/transaksi/bayar_langsung", data)
    } catch (error) {
        console.log(error)
    }
})

export const addKeranjang = createAsyncThunk("keranjang/addKeranjang", async (data) => {
    try {
        await axios.post("/api/keranjang", data)
    } catch (err) {
        console.log(err)
    }
})

export const getKeranjangByUser = createAsyncThunk("keranjang/getKeranjangByUser", async (user) => {
    try {
        const res = await axios.get("/api/keranjang/byuser/" + user)
        return res.data.data
    } catch (err) {
        console.log(err)
    }
})

const keranjangSlice = createSlice({
    name: "keranjang",
    initialState: {
        data_kernjang: [],
        keranjangByUser: [],
        loading_keranjang: false,
    },
    reducers: {},
    extraReducers: {
        [getKeranjang.pending](state) {
            state.loading_keranjang = true
        },
        [getKeranjang.fulfilled](state, action) {
            state.loading_keranjang = false
            state.data_keranjang = action.payload
        },
        [bayarLangsung.pending](state) {
            state.loading_keranjang = true
        },
        [bayarLangsung.fulfilled](state) {
            state.loading_keranjang = false
            state.data_keranjang = []
        },
        [getKeranjangByUser.pending](state) {
            state.loading_keranjang = true
        },
        [getKeranjangByUser.fulfilled](state, action) {
            state.loading_keranjang = false
            state.keranjangByUser = action.payload
        },
        [addKeranjang.pending](state) {
            state.loading_keranjang = true
        },
        [addKeranjang.fulfilled](state, action) {
            state.loading_keranjang = false
            state.keranjangByUser = action.payload
        },
    },
})

export default keranjangSlice.reducer
