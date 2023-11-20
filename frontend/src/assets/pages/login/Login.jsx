import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../../../feature/authSlice"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const { user, loading } = useSelector((state) => state.auth)
    const nav = useNavigate()
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        email: "",
        password: "",
    })

    const onsubmit = async (e) => {
        e.preventDefault()
        await dispatch(login(form))
        // nav('/')
    }

    const onchenge = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        if (user) {
            nav("/")
        }
    }, [user])

    return (
        <>
            {/* <Baner title={"Profil"} sub={"Profil"} main_sub={"Tentang"} /> */}
            <div className='container mt-5'>
                <section className='vh-100'>
                    <div className='container-fluid h-custom'>
                        <div className='row d-flex justify-content-center align-items-center h-100'>
                            <div className='col-md-9 col-lg-6 col-xl-5'>
                                <img src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp' className='img-fluid' alt='Sample image' />
                            </div>
                            <div className='col-md-8 col-lg-6 col-xl-4 offset-xl-1'>
                                <form onSubmit={onsubmit}>
                                    <div className='divider d-flex align-items-center my-4'>
                                        <h2 className='text-center fw-bold mx-3 mb-0'>Login</h2>
                                    </div>
                                    {/* Email input */}
                                    <div className='form-outline mb-4'>
                                        <input
                                            type='email'
                                            name='email'
                                            onChange={onchenge}
                                            id='form3Example3'
                                            className='form-control border-bottom form-control-lg'
                                            placeholder='Enter a valid email address'
                                        />
                                        {/* <label className='form-label text-primary' htmlFor='form3Example3'>
                                            Email address
                                        </label> */}
                                    </div>
                                    {/* Password input */}
                                    <div className='form-outline mb-3'>
                                        <input
                                            type='password'
                                            name='password'
                                            onChange={onchenge}
                                            id='form3Example4'
                                            className='form-control border-bottom form-control-lg'
                                            placeholder='Enter password'
                                        />
                                        {/* <label className='form-label' htmlFor='form3Example4'>
                                            Password
                                        </label> */}
                                    </div>
                                    <div className='text-center text-lg-start mt-4 pt-2'>
                                        {!loading ? (
                                            <button type='submit' className=' rounded btn-primary btn btn-sm'>
                                                Login
                                            </button>
                                        ) : (
                                            <button className='btn btn-primary btn-sm rounded' type='button' disabled>
                                                <span className='spinner-border spinner-border-sm ' role='status' aria-hidden='true' /> Validation..
                                            </button>
                                        )}

                                        {/* <p className='small fw-bold mt-2 pt-1 mb-0'>
                                            Don't have an account?{" "}
                                            <a href='#!' className='link-danger'>
                                                Register
                                            </a>
                                        </p> */}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Login
