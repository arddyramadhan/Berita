import React,{ useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ActiveLink } from "../../../feature/authSlice"
import { getPengguna } from "../../../feature/penggunaSlice"
import PenggunaCard from "./../../components/PenggunaCard"
import { Link } from "react-router-dom"
import PenggunaCardLoading from "../../components/PenggunaCardLoading"
const PenggunaIndex = () => {
    const dispatch = useDispatch()
    const { data_pengguna, loading_pengguna } = useSelector((state) => state.pengguna)
    
    useEffect(() => {
        dispatch(ActiveLink("admin"))
        dispatch(getPengguna(1))
    }, [dispatch])
    return (
        <>
            <div>
                <section className='page-banner'>
                    <div className='container'>
                        <div className='page-breadcrumbs'>
                            <ul className='list-unstyled'>
                                <li>
                                    <Link to={"/"}>Home</Link>
                                </li>
                                <li>Pegawai</li>
                            </ul>
                        </div>
                        <div className='page-banner-title'>
                            <h3>Pegawai</h3>
                        </div>
                    </div>
                </section>
                <section className='blog-section'>
                    <div className='container'>
                        <div className='d-flex justify-content-end mb-3'>
                            <Link to={"/pengguna/add"} className='btn btn-primary rounded'>
                                Tambah Pegawai
                            </Link>
                        </div>
                        <div className='row row-gutter-y-30'>
                            {loading_pengguna ? (
                                <PenggunaCardLoading jumlah={12} />
                            ) : (
                                data_pengguna &&
                                data_pengguna.map((item) => {
                                    return <PenggunaCard key={item.id} data={item} />
                                })
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default PenggunaIndex
