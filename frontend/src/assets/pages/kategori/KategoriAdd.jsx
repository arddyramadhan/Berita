import React, { useState } from "react"
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { ActiveLink } from "../../../feature/authSlice";
import { storeKategori } from "../../../feature/kategoriSlice";
import { useNavigate } from 'react-router-dom';

const KategoriAdd = () => {
    const dispatch = useDispatch()
    const nav = useNavigate()
    const [form, setForm] = useState({
        nama: '',
        is_active : ''
    })

    const onchange = (e) => {
        setForm({...form, [e.target.name] : e.target.value})
    }

    const onsubmit = async (e) => {
        e.preventDefault()
        await dispatch(storeKategori(form))
        nav('/kategori')
    }
    useEffect(() => {
        dispatch(ActiveLink("admin"))
    }, [dispatch])

    return (
        <>
            <section className='contact-section'>
                <div className='container'>
                    <div className='row'>
                        {/* col-lg-4 */}
                        <div className='col-lg-12'>
                            <form className='contact-form  contact-form-validated' onSubmit={onsubmit}>
                                <div className='row row-gutter-10'>
                                    <div className='col-12 col-lg-12'>
                                        <input onChange={onchange} type='text' id='nama' className='input-text' placeholder='Nama Kategori' name='nama' aria-required='true' />
                                    </div>
                                    {/* col-12 col-lg-6 */}
                                    <div className='col-12 col-lg-12'>
                                        {/* <input type='email' id='email' className='input-text' placeholder='Email address' name='email' aria-required='true' /> */}
                                        <select name='is_active' onChange={onchange} defaultValue={""} id='' className='input-text'>
                                            <option disabled value=''>
                                                Pilih satu!{" "}
                                            </option>
                                            <option value='1'>Aktiv</option>
                                            <option value='0'>Non Aktiv</option>
                                        </select>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <button type='submit' className='btn btn-primary'>
                                            Simpan Kategori
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

export default KategoriAdd
