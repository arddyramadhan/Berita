import React from "react";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './../../feature/aurhSlice';

const AuthLayout = () => {
    // const { user, logout } = useAuth()
    const dispatch = useDispatch()
    const nav = useNavigate()
    const { is_login, user } = useSelector((state) => state.auth)

    const handleLogout = async(e) => {
        e.preventDefault()
        await dispatch(logout())
        await nav('/login')
    }
    return user ? (
        <>
            <nav className='bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700'>
                <div className='flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto'>
                    <Link to='/' className='flex items-center'>
                        <img src='https://flowbite.com/docs/images/logo.svg' className='h-8 mr-3' alt='Flowbite Logo' />
                        <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>Kasir Apps</span>
                    </Link>
                    <button
                        data-collapse-toggle='navbar-dropdown'
                        type='button'
                        className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                        aria-controls='navbar-dropdown'
                        aria-expanded='false'>
                        <span className='sr-only'>Open main menu</span>
                        <svg className='w-6 h-6' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                            <path
                                fillRule='evenodd'
                                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                                clipRule='evenodd'
                            />
                        </svg>
                    </button>
                    <div className='hidden w-full md:block md:w-auto' id='navbar-dropdown'>
                        <ul className='flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
                            <li>
                                <Link
                                    to={"/"}
                                    className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent'
                                    aria-current='page'>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/pengguna"}
                                    className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>
                                    Pengguna
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/kategori"}
                                    className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>
                                    Kategori
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/produk"}
                                    className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>
                                    Produk
                                </Link>
                            </li>
                            {user.akses == "kasir" && (
                                <>
                                    <li>
                                        <Link
                                            to={"/pemesanan"}
                                            className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>
                                            Pemesanan
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link
                                            to={"/transaksi"}
                                            className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>
                                            Transkasi
                                        </Link>
                                    </li> */}
                                    {/* <li>
                                        <Link
                                            to={"/keranjang"}
                                            className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>
                                            Keranjang
                                        </Link>
                                    </li> */}
                                    <li>
                                        <Link
                                            to={"/pembayaran"}
                                            className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>
                                            Pembayaran
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={"/daftar_transaksi"}
                                            className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>
                                            Daftar Transaksi
                                        </Link>
                                    </li>
                                </>
                            )}
                            <li>
                                <button
                                    onClick={handleLogout}
                                    className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    ) : (
        <Navigate to={"/"} />
    )
}

export default AuthLayout
