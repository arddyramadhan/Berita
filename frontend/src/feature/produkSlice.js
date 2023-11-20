import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "../assets/api/axios"
import  swal  from 'sweetalert';

export const getProduk = createAsyncThunk("produk/getProduk", async () => {
    const res = await axios.get("/api/produk")
    return res.data.data
})


export const storeProduk = createAsyncThunk("produk/storeProduk", async (data) => {
    await axios.post("/api/produk", data, {
        headers: { "Content-Type": "multipart/form-data" },
    })
})

const produkSlice = createSlice({
    name: "produk",
    initialState: {
        loading: false,
        data_produk: [],
    },
    reducers: {},
    extraReducers: {
        [getProduk.pending](state) {
            state.loading = true
        },
        [getProduk.fulfilled](state, action) {
            state.loading = false
            // swal("Data Produk Ditemukan!")
            state.data_produk = action.payload
        },
        [getProduk.rejected](state) {
            state.loading = true
        },
        
        [storeProduk.pending](state) {
            state.loading = true
        },
        [storeProduk.fulfilled](state, { payload }) {
            state.loading = false
            getProduk()
        },
    },
})

export default produkSlice.reducer
