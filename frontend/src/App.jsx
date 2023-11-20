import { Routes, Route } from "react-router-dom"
import React, { useEffect } from "react"
import GuestLayout from "./assets/layout/GuestLayout"
import { useSelector, useDispatch } from "react-redux"
import { getLogin } from "./feature/authSlice"
import Home from "./assets/pages/Home"
import NewsLanding from "./assets/pages/news/NewsLanding"
import KategoriIndex from "./assets/pages/kategori/KategoriIndex"
import KategoriAdd from "./assets/pages/kategori/KategoriAdd"
import NewsDetail from "./assets/pages/news/NewsDetail"
import PenggunaIndex from "./assets/pages/pengguna/PenggunaIndex"
import PenggunaAdd from "./assets/pages/pengguna/PenggunaAdd"
import KegiatanLanding from "./assets/pages/kegiatan/KegiatanLanding"
import Kontak from "./assets/pages/kontak/Kontak"
import Galeri from "./assets/pages/galeri/Galeri"
import Profil from "./assets/pages/profil/Profil"
import Login from "./assets/pages/login/Login"
import VisiMisi from "./assets/pages/visimisi/VisiMisi"
import NewsAdd from "./assets/pages/news/NewsAdd"
import NewsIndex from "./assets/pages/kategori/NewsIndex"

function App() {
    // const { user, getUser, setLoading, loading } = useAuth()
    const Dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)

    useEffect(() => {
        if (!user) {
            Dispatch(getLogin())
        }
    }, [Dispatch, user])
    return (
        <div className='min-h-screen text-white bg-gray-50 dark:bg-gray-900'>
            <div className='mx-auto max-w-7xl'>
                <Routes>
                    {/* 
                    <Route element={<AuthLayout />}>
                        <Route path='/dashboard' element={<Dashboard />} />
                    </Route> 
                    */}
                    <Route element={<GuestLayout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/news' element={<NewsLanding />} />
                        <Route path='/news/:slug' element={<NewsDetail />} />
                        <Route path='/news/add' element={<NewsAdd />} />
                        <Route path='/news/index' element={<NewsIndex />} />
                        <Route path='/kegiatan' element={<KegiatanLanding />} />
                        <Route path='/kategori' element={<KategoriIndex />} />
                        <Route path='/kategori/add' element={<KategoriAdd />} />
                        <Route path='/pengguna' element={<PenggunaIndex />} />
                        <Route path='/pengguna/add' element={<PenggunaAdd />} />
                        <Route path='/kontak' element={<Kontak />} />
                        <Route path='/galeri' element={<Galeri />} />
                        <Route path='/profil' element={<Profil />} />
                        <Route path='/visimisi' element={<VisiMisi />} />
                        <Route path='/login' element={<Login />} />
                    </Route>
                </Routes>
            </div>
        </div>
    )
}

export default App