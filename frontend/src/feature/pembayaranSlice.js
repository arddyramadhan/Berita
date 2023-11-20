import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from './../assets/api/axios';

export const getPembayaran = createAsyncThunk('pembayaran/getPembayaran', async () => {
    const api = await axios.get("/api/pembayaran")
    return api.data.data
})

const pembayaranEntity = createEntityAdapter({
    selectId: (pembayaran) => pembayaran.id,
});
// @ts-ignore
const pembayaranSlice = createSlice({
    name: 'pembayaran',
    initialState: pembayaranEntity.getInitialState(),
    extraReducers: {
        // @ts-ignore
        [getPembayaran.fulfilled] : (state, action) => {
            pembayaranEntity.setAll(state, action.payload)
        }
    }
});

export const pembayaranSelector = pembayaranEntity.getSelectors(state => state.pembayaran)
export default pembayaranSlice.reducer