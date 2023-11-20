import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getKategori, setPage } from "../../../feature/kategoriSlice"
import { ActiveLink } from "../../../feature/authSlice"
import Paginate from './../../components/Paginate';
import Baner from "../../components/Baner"

const KategoriIndex = () => {
    const dispatch = useDispatch()
    const { data_kategori, loading_kategori, page, meta } = useSelector((state) => state.kategori)

    const handlePage = async(page) => {
        await dispatch(setPage(page))
        await dispatch(getKategori(page))
    }

    useEffect(() => {
        const getData = async () => {
            await dispatch(getKategori(page))
            await dispatch(ActiveLink("admin"))
        }
        getData()
    }, [dispatch])

    return (
        <>
            <Baner title={"Devisi"} sub={"Devisi"} />
            <section className='contact-section'>
                <div className='container'>
                    {/* <div className='d-flex justify-content-end mb-2'>
                        <Link to={"/kategori/add"} className='btn btn-secondary rounded'>
                            Tambah Kategori
                        </Link>
                    </div> */}
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col'>Devisi</th>
                                <th scope='col'>Status Aktiv</th>
                                {/* <th scope='col'>Handle</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {!loading_kategori ? (
                                data_kategori &&
                                data_kategori.map((item, i) => {
                                    return (
                                        <tr key={item.id}>
                                            <th scope='row'> {++i}</th>
                                            <td>{item.nama}</td>
                                            <td>{item.is_active ? "Aktiv" : "Non Aktiv"}</td>
                                            {/* <td>@mdo</td> */}
                                        </tr>
                                    )
                                })
                            ) : (
                                <tr>
                                    <th colSpan={3} scope='row' className=''>
                                        <center>memuat data</center>
                                    </th>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <div className='d-flex justify-content-center item-center' aria-label='Page navigation example'>
                        <Paginate page={page} handlePage={handlePage} last_page={meta.last_page} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default KategoriIndex
