import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from './../assets/api/axios';

export const getPengguna = createAsyncThunk('pengguna/getPengguna', async (page) => {
    try {
        const res = await axios.get('/api/pengguna?page='+page)
        return res.data
    } catch (err) {
        console.log(err);
    }
})

export const storePengguna = createAsyncThunk('pengguna/store', async (data) => {
    try {
        const res = await axios.post('/api/pengguna', data)
        return res.data
    } catch (err) {
        console.log(err);
    }
})

const penggunaSlice = createSlice({
    name: 'pengguna',
    initialState: {
        loading_pengguna : false,
        data_pengguna: null,
        page: 1,
        meta: {},
        info :null
    },
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload
        }
    },
    extraReducers: {
        [getPengguna.pending.toString()](state) {
            state.loading_pengguna = true
            state.info = null
        },
        [getPengguna.fulfilled.toString()](state, action) {
            state.loading_pengguna = false
            state.data_pengguna = action.payload.data
            state.meta = action.payload.meta
        },
        [getPengguna.rejected.toString()](state) { 
            state.loading_pengguna = false
        },

        [storePengguna.pending.toString()](state) {
            state.loading_pengguna = true
            state.info = null
        },
        [storePengguna.fulfilled.toString()](state, action) {
            state.loading_pengguna = false
            state.info = action.payload.info
        },
        [storePengguna.rejected.toString()](state) { 
            state.loading_pengguna = false
        },
    },
})

export const {setPage} = penggunaSlice.actions
export default penggunaSlice.reducer