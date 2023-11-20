import React,{ useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ActiveLink } from "../../../feature/authSlice"
import { getKategori } from "../../../feature/kategoriSlice"
import { useNavigate } from "react-router-dom"
import { storePengguna } from "../../../feature/penggunaSlice"

const PenggunaAdd = () => {
    const dispatch = useDispatch()
    const nav = useNavigate()
    const { data_kategori } = useSelector((state) => state.kategori)
    const [form, setForm] = useState({
        nama: "",
        jenis_kelamin: "",
        jabatan: "",
        tempat_lahir: "",
        tgl_lahir: new Date().toISOString().slice(0, 10),
        pangkat: "",
        kategori_id: "",
        facebook: "",
        twitter: "",
        instagram: "",
        foto: "",
    })

    const onchange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const onchangeimg = (e) => {
        setForm({ ...form, [e.target.name]: e.target.files[0] })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const fData = new FormData()
        fData.append("nama", form.nama)
        fData.append("jenis_kelamin", form.jenis_kelamin)
        fData.append("jabatan", form.jabatan)
        fData.append("tempat_lahir", form.tempat_lahir)
        fData.append("tgl_lahir", form.tgl_lahir)
        fData.append("pangkat", form.pangkat)
        fData.append("kategori_id", form.kategori_id)
        fData.append("facebook", form.facebook)
        fData.append("twitter", form.twitter) 
        fData.append("instagram", form.instagram)
        fData.append("foto", form.foto)

        await dispatch(storePengguna(fData))
        nav("/pengguna")
    }

    useEffect(() => {
        dispatch(ActiveLink("admin"))
        dispatch(getKategori(1))
    }, [dispatch])

    return (
        <>
            <section className='contact-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <form className='contact-form  contact-form-validated' onSubmit={handleSubmit}>
                                <div className='row row-gutter-10'>
                                    <div className='col-12 col-lg-12'>
                                        <input onChange={onchange} type='text' id='nama' className='input-text' placeholder='Nama' name='nama' aria-required='true' />
                                    </div>
                                    <div className='col-12 col-lg-12'>
                                        <select name='jenis_kelamin' onChange={onchange} defaultValue={""} id='' className='input-text'>
                                            <option disabled value=''>
                                                Jenis Kelamin{" "}
                                            </option>
                                            <option value='L'>Laki-laki</option>
                                            <option value='P'>Perempuan</option>
                                        </select>
                                    </div>
                                    <div className='col-12 col-lg-12'>
                                        <input onChange={onchange} type='text' id='nama' className='input-text' placeholder='Jabatan' name='jabatan' aria-required='true' />
                                    </div>
                                    <div className='col-12 col-lg-12'>
                                        <input onChange={onchange} type='text' id='nama' className='input-text' placeholder='Tempat Lahir' name='tempat_lahir' aria-required='true' />
                                    </div>
                                    <div className='col-12 col-lg-12'>
                                        <input
                                            onChange={onchange}
                                            type='date'
                                            id='nama'
                                            value={form.tgl_lahir}
                                            className='input-text'
                                            placeholder='Tempat Lahir'
                                            name='tgl_lahir'
                                            aria-required='true'
                                        />
                                    </div>
                                    <div className='col-12 col-lg-12'>
                                        <input onChange={onchange} type='text' id='nama' className='input-text' placeholder='Pangkat' name='pangkat' aria-required='true' />
                                    </div>
                                    <div className='col-12 col-lg-12'>
                                        <input onChange={onchange} type='text' id='nama' className='input-text' placeholder='Link Facebook' name='facebook' aria-required='true' />
                                    </div>
                                    <div className='col-12 col-lg-12'>
                                        <input onChange={onchange} type='text' id='nama' className='input-text' placeholder='Link Instagram' name='instagram' aria-required='true' />
                                    </div>
                                    <div className='col-12 col-lg-12'>
                                        <input onChange={onchange} type='text' id='nama' className='input-text' placeholder='Link Twitter' name='twitter' aria-required='true' />
                                    </div>
                                    <div className='col-12 col-lg-12'>
                                        <input
                                            onChange={onchangeimg}
                                            type='file'
                                            id='nama'
                                            className='input-file p-3 col-lg-12'
                                            style={{ backgroundColor: "#f3f6f7", color: "#838e91" }}
                                            name='foto'
                                            aria-required='true'
                                        />
                                        {/* <span>{form.foto ? form.foto : 'belum ada'}</span> */}
                                    </div>
                                    <div className='col-12 col-lg-12'>
                                        <select name='kategori_id' onChange={onchange} defaultValue={""} id='' className='input-text'>
                                            <option disabled value=''>
                                                Devisi{" "}
                                            </option>
                                            {data_kategori &&
                                                data_kategori.map((item) => {
                                                    return (
                                                        <option key={item.id} value={item.id}>
                                                            {item.nama}
                                                        </option>
                                                    )
                                                })}
                                        </select>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <button type='submit' className='btn btn-primary rounded'>
                                            Simpan
                                        </button>
                                    </div>
                                </div>
                            </form>
                            {/* contact-form */}
                        </div>
                        {/* col-lg-8 */}
                    </div>
                    {/* row */}
                </div>
                {/* container */}
            </section>
            {/* contact-section */}
        </>
    )
}

export default PenggunaAdd
