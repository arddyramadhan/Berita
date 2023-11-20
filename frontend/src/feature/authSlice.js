import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "../assets/api/axios"
import swal from "sweetalert"

const csrf = () => axios.get("/sanctum/csrf-cookie")

export const getLogin = createAsyncThunk("auth/getLogin", async () => {
    const { data } = await axios.get("/api/user")
    return data
})

export const login = createAsyncThunk("auth/login", async ({ ...form }) => {
    await csrf()
    const res = await axios.post("/login", form)
    return res
})

export const logout = createAsyncThunk("auth/logout", async () => {
    await axios.post("/logout")
})

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        loading: false,
        is_login: false,
        info_login: null,
        activeLink: "",
    },
    reducers: {
        ActiveLink: (state, action) => {
            state.activeLink = action.payload
        },
    },
    extraReducers: {
        [login.pending.toString()](state) {
            state.loading = true
            state.is_login = false
        },
        [login.fulfilled.toString()](state, action ) {
            state.loading = false
            state.is_login = true
            state.info_login = action.payload
            swal({
                title: "Success!",
                text: "Selamat datang kembali ",
                icon: "success",
                button: "Aww yiss!",
            })
        },
        [login.rejected.toString()](state, action) {
            state.loading = false
            state.is_login = false
            state.info_login = action.payload
            swal({
                title: "Gagal!",
                text: "Periksa kembali Username dan Password",
                icon: "error",
                button: "OK",
            })
            // console.log(payload)
        },
        [logout.pending.toString()](state) {
            state.loading = true
        },
        [logout.fulfilled.toString()](state) {
            state.loading = false
            state.user = null
            state.is_login = false
        },
        [logout.rejected.toString()](state) {
            state.loading = false
        },

        [getLogin.pending.toString()](state) {
            state.loading = true
            state.is_login = false
        },
        [getLogin.fulfilled.toString()](state, action) {
            state.loading = false
            state.user = action.payload
            state.is_login = true
        },
        [getLogin.rejected.toString()](state) {
            state.loading = false
            state.is_login = false
        },
    },
})

export const { ActiveLink } = authSlice.actions
export default authSlice.reducer
