import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ActiveLink } from "../../../feature/authSlice"
import { getKategori } from "../../../feature/kategoriSlice"
import { useNavigate } from "react-router-dom"
import { CKEditor } from "@ckeditor/ckeditor5-react"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import { storeBerita } from "../../../feature/beritaSlice"

const NewsAdd = () => {
    const dispatch = useDispatch()
    const nav = useNavigate()
    const {data_kategori} = useSelector((state)=> state.kategori)

    const [form, setForm] = useState({
        judul: "",
        isi: "",
        kategori_id: "",
        foto: "",
        created_at : ""
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
        fData.append("judul", form.judul)
        fData.append("isi", form.isi)
        fData.append("kategori_id", form.kategori_id)
        fData.append("foto", form.foto)
        fData.append("created_at", form.created_at)
        await dispatch(storeBerita(fData))
        // console.log(form);
        nav("/news")
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
                                    <div className='col-12 col-lg-12 mb-2'>
                                        <label htmlFor='' className='text-dark mb-2'>
                                            Judul Berita
                                        </label>
                                        <input onChange={onchange} type='text' id='judul' className='input-text bg-light' placeholder='Judul Berita' name='judul' aria-required='true' />
                                    </div>
                                    <div className='col-12 col-lg-12 mb-2'>
                                        <label htmlFor='' className='text-dark mb-2'>
                                            Tanggal Berita
                                        </label>
                                        <input onChange={onchange} type='date' id='created_at' className='input-text bg-light' name='created_at' aria-required='true' />
                                    </div>

                                    <label htmlFor='' className='text-dark mb-2'>
                                        Isi Berita
                                    </label>
                                    <div className='col-12 col-lg-12 mb-2'>
                                        <CKEditor
                                            editor={ClassicEditor}
                                            data='Isi berita'
                                            // onReady={(editor) => {
                                            //     // You can store the "editor" and use when it is needed.
                                            //     // console.log("Editor is ready to use!", editor)
                                            // }}
                                            onChange={(event, editor) => {
                                                const data = editor.getData()
                                                form.isi = data
                                            }}
                                            // onBlur={(event, editor) => {
                                            //     console.log("Blur.", editor)
                                            // }}
                                            // onFocus={(event, editor) => {
                                            //     console.log("Focus.", editor)
                                            // }}
                                        />
                                    </div>
                                    <div className='col-12 col-lg-12 mb-2'>
                                        <label htmlFor='' className='text-dark mb-2'>
                                            Devisi
                                        </label>
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
                                    <div className='col-12 col-lg-12 mb-2'>
                                        <label htmlFor='' className='text-dark mb-2'>
                                            Gambar
                                        </label>
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
                                    <div className='d-flex justify-content-end'>
                                        <button type='submit' className='btn btn-primary rounded'>
                                            Simpan
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewsAdd

