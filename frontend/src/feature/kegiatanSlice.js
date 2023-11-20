import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../assets/api/axios';

export const getKegiatan = createAsyncThunk('kegiatan/getKegiatan', async (page) => {
    try {
        const res = await axios.get("/api/kegiatan?page="+page)
        return res.data
    } catch (err) {
        console.log(err);
    }
})

const kegiatanSlice = createSlice({
    name: 'kegiatan',
    initialState: {
        data_kegiatan: null,
        loading_kegiatan: false,
        meta: null,
        page : 1,
        info: '',
    },
    reducers: {},
    extraReducers: {
        [getKegiatan.pending.toString()](state) {
            state.loading_kegiatan = true
            state.info = "menunggu"
        },
        [getKegiatan.fulfilled.toString()](state, action) {
            state.loading_kegiatan = false
            state.info = "berhasil"
            state.data_kegiatan =  action.payload.data
            state.meta = action.payload.meta
            state.page = action.payload.meta.current_page
        },
        [getKegiatan.rejected.toString()](state) {
            state.loading_kegiatan = false
            state.info = "error"
        },
    }
})


export default kegiatanSlice.reducer