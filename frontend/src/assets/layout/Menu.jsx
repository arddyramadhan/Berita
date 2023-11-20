import React, { useEffect } from "react"
import { ActiveLink, getLogin, login, logout } from "../../feature/authSlice"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const Menu = () => {
    const { is_login, activeLink } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    return (
        <div className='navigation'>
            <ul className='main-menu-list list-unstyled'>
                <li className={activeLink == "home" ? "active" : ""}>
                    <a
                        onClick={() => {
                            dispatch(ActiveLink("home"))
                            navigate("/")
                        }}
                        style={{ cursor: "pointer" }}>
                        {" "}
                        Beranda
                    </a>
                </li>
                <li className={activeLink == "tentang" ? "active has-dropdown" : "has-dropdown"}>
                    <a>Tentang</a>
                    <ul className='list-unstyled'>
                        <li>
                            <a
                                onClick={() => {
                                    navigate("/profil")
                                }}
                                style={{ cursor: "pointer" }}>
                                {" "}
                                Profil
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => {
                                    navigate("/visimisi")
                                }}
                                style={{ cursor: "pointer" }}>
                                {" "}
                                Visi Misi
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => {
                                    dispatch(ActiveLink("admin"))
                                    navigate("/pengguna")
                                }}
                                style={{ cursor: "pointer" }}>
                                {" "}
                                Pegawai BKAD
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => {
                                    dispatch(ActiveLink("admin"))
                                    navigate("/kategori")
                                }}
                                style={{ cursor: "pointer" }}>
                                {" "}
                                Struktur Organisasi
                            </a>
                        </li>
                    </ul>
                </li>
                {is_login && (
                    <>
                        <li className={activeLink == "admin" ? "active has-dropdown" : "has-dropdown"}>
                            <a>Admin</a>
                            <ul className='list-unstyled'>
                                <li>
                                    <a
                                        onClick={() => {
                                            dispatch(ActiveLink("admin"))
                                            navigate("/kategori")
                                        }}
                                        style={{ cursor: "pointer" }}>
                                        {" "}
                                        Devisi
                                    </a>
                                </li>
                                {/* <li>
                                    <a
                                        onClick={() => {
                                            navigate("/pengguna")
                                        }}
                                        style={{ cursor: "pointer" }}>
                                        {" "}
                                        Pegawai
                                    </a>
                                </li> */}
                                <li>
                                    <a
                                        onClick={() => {
                                            navigate("/news/index")
                                        }}
                                        style={{ cursor: "pointer" }}>
                                        {" "}
                                        Berita
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </>
                )}
                <li className={activeLink == "kegiatan" ? "active" : ""}>
                    <a
                        onClick={() => {
                            navigate("/kegiatan")
                        }}
                        style={{ cursor: "pointer" }}>
                        {" "}
                        Kegiatan
                    </a>
                </li>
                <li className={activeLink == "galeri" ? "active" : ""}>
                    <a
                        onClick={() => {
                            navigate("/galeri")
                        }}
                        style={{ cursor: "pointer" }}>
                        {" "}
                        Galeri
                    </a>
                </li>
                <li className={activeLink == "news" ? "active" : ""}>
                    <a
                        onClick={() => {
                            dispatch(ActiveLink("news"))
                            navigate("/news")
                        }}
                        style={{ cursor: "pointer" }}>
                        {" "}
                        Berita
                    </a>
                </li>
                <li className={activeLink == "kontak" ? "active" : ""}>
                    <a
                        onClick={() => {
                            dispatch(ActiveLink("kontak"))
                            navigate("/kontak")
                        }}
                        style={{ cursor: "pointer" }}>
                        {" "}
                        Kontak
                    </a>
                </li>
                {is_login && (
                    <li className={activeLink == "kontak" ? "active" : ""}>
                        <a
                            onClick={() => {
                                dispatch(logout())
                                navigate("/")
                            }}
                            style={{ cursor: "pointer" }}>
                            {" "}
                            Logout
                        </a>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Menu
