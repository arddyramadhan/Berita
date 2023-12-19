import React from 'react'
import Menu from './Menu'

const Header = () => {
    return (
        <header className='header'>
            <div className='topbar'>
                <div className='topbar-inner'>
                    <div className='topbar-left'>
                        <div className='topbar-socials'>
                            <a href='#'>
                                <i className='fa-brands fa-twitter' />
                            </a>
                            <a href='#'>
                                <i className='fa-brands fa-facebook' />
                            </a>
                            <a href='#'>
                                <i className='fa-brands fa-pinterest-p' />
                            </a>
                            <a href='#'>
                                <i className='fa-brands fa-instagram' />
                            </a>
                        </div>
                        <div className='topbar-info'>
                            <ul>
                                <li>
                                    <div className='topbar-icon'>
                                        <i className='fa-solid fa-envelope' />
                                    </div>
                                    <div className='topbar-text'>
                                        <a href='https://mail.google.com/mail/u/0/#search/bkadkabgor%40gmail.com?compose=new' target='__blank'>bkadkabgor@gmail.com</a>
                                    </div>
                                </li>
                                <li>
                                    <div className='topbar-icon'>
                                        <i className='fa-solid fa-clock' />
                                    </div>
                                    <div className='topbar-text'>
                                        <span>Buka dari: Senin - Jumat 7.30 am - 4.00 pm</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <div className='topbar-right'>
                            <ul>
                                <li>
                                    <a href='department-details.html'>Council</a>
                                </li>
                                <li>
                                    <a href='departments.html'>Government</a>
                                </li>
                                <li>
                                    <a href='contact.html'>Complaints</a>
                                </li>
                            </ul>
                        </div> */}
                </div>
            </div>
            <div className='main-menu sticky-header'>
                <div className='main-menu-inner'>
                    <div className='main-menu-left'>
                        <div className='main-menu-logo'>
                            <a href='index.html'>
                                <img src={"./image/logo.png"} alt='img-1' width={140} />
                            </a>
                        </div>
                        <Menu/>
                    </div>
                    <div className='main-menu-right'>
                        <div className='mobile-menu-button mobile-nav-toggler'>
                            <span />
                            <span />
                            <span />
                        </div>
                        <div className='search-box'>
                            <a href='#' className='search-toggler'>
                                <i className='flaticon-search-interface-symbol' />
                            </a>
                        </div>
                        {/* <div className='main-menu-right-button'>
                            <a href='#' className='btn btn-primary'>
                                Login
                            </a>
                        </div> */}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header