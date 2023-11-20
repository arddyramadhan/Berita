import { createSlice, createEntityAdapter, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../assets/api/axios';

export const getDaftar_transaksi = createAsyncThunk("transaksi/getDaftar_transaksi", async () => {
    const api = await axios.get('/api/transaksi')
    return api.data.data
})

const transaksiAdapter = createEntityAdapter({
    selectId :  (transaksi) => transaksi.id,
})

const transaksiSlice = createSlice({
    name: 'transaksi',
    initialState: transaksiAdapter.getInitialState(),
    reducers: {
        setAllTransaksi : transaksiAdapter.setAll
    },
    extraReducers : {}
})

export const {setAllTransaksi} = transaksiSlice.actions

export default transaksiSlice.reducer