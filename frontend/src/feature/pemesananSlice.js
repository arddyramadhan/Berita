import axios from "../assets/api/axios"
import { createEntityAdapter, createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const getData = createAsyncThunk("pemesanan/getData", async () => {
    const api = await axios.get("/api/produk")
    return api.data.data
})

const pemesananAdapter = createEntityAdapter({
    selectId: (pemesanan) => pemesanan.id,
})

const pemesananSlice = createSlice({
    name: "pemesanan",
    // initialState: pemesananAdapter.getInitialState({
    //     data: [],
    //     loading: false,
    // }),
    initialState: {
        data: [],
        loading: false,
    },
    reducers: {},
    extraReducers: {
        [getData.pending](state) {
            state.loading = true
        },
        [getData.fulfilled](state, action) {
            state.loading = false
            state.data = action.payload
            // pemesananAdapter.setAll(state, action.payload)
        },
        [getData.rejected](state) {
            state.loading = true
        },
    },
})

export default pemesananSlice.reducer
