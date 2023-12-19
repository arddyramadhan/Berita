import { Outlet } from "react-router-dom"
import React, { useEffect } from "react"
import Header from "./Header"
import { useDispatch, useSelector } from "react-redux"
import { getLogin } from "../../feature/authSlice"

const GuestLayout = () => {
     const dispatch = useDispatch()
     const { user, is_login } = useSelector((state) => state.auth)

     useEffect(() => {
         if (!user) {
             dispatch(getLogin())
         }
     }, [dispatch, user, is_login])
    return (
        <>
            {<Header/>}
            <div className='page-wrapper'>
                <Outlet />
            </div>
            <div>
                <section className='footer'>
                    <div className='footer-inner'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-4'>
                                    <div className='footer-widget-logo'>
                                        <a href='index.html'>
                                            <img src={window.location.origin + "/src/assets/template/image/logo-light.png"} className='img-fluid' alt='img-25' />
                                        </a>
                                    </div>
                                    {/* footer-widget-logo */}
                                    <div className='footer-widget-text'>
                                        {/* <p>The gowrnx official guide to living, working, visiting and investing in the Texas</p> */}
                                    </div>
                                    {/* footer-widget-text */}
                                    <div className='footer-widget-socials'>
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
                                    {/* footer-widget-socials */}
                                </div>
                                {/*col-lg-4*/}
                                <div className='col-lg-3'>
                                    <div className='footer-widget'>
                                        {/* <div className='footer-widget-explore'>
                                            <h4 className='footer-widget-title'>Explore</h4>
                                            <ul className='list-unstyled'>
                                                <li>
                                                    <a href='department-details.html'>Administration</a>
                                                </li>
                                                <li>
                                                    <a href='service-details.html'>Fire Services</a>
                                                </li>
                                                <li>
                                                    <a href='event-details.html'>Business &amp; Taxation</a>
                                                </li>
                                                <li>
                                                    <a href='team-details.html'>Circular’s And Go’s</a>
                                                </li>
                                                <li>
                                                    <a href='contact.html'>Contact Us</a>
                                                </li>
                                            </ul>
                                        </div> */}
                                    </div>
                                    {/*footer-widget*/}
                                </div>
                                {/*col-lg-3*/}
                                <div className='col-lg-2'>
                                    <div className='footer-widget'>
                                        {/* <div className='footer-widget-department'>
                                            <h4 className='footer-widget-title'>Departments</h4>
                                            <ul className='list-unstyled'>
                                                <li>
                                                    <a href='department-details.html'>Health &amp; Safety</a>
                                                </li>
                                                <li>
                                                    <a href='department-details.html'>Housing &amp; Land</a>
                                                </li>
                                                <li>
                                                    <a href='department-details.html'>Legal &amp; Finance</a>
                                                </li>
                                                <li>
                                                    <a href='department-details.html'>Transport &amp; Traffic</a>
                                                </li>
                                                <li>
                                                    <a href='department-details.html'>Arts &amp; Culture</a>
                                                </li>
                                            </ul>
                                        </div> */}
                                    </div>
                                    {/*footer-widget*/}
                                </div>
                                {/*col-lg-2*/}
                                <div className='col-lg-3'>
                                    <div className='footer-widget'>
                                        {/* <div className='footer-widget-contact'>
                                            <h4 className='footer-widget-title'>Contact</h4>
                                            <p>
                                                88 Broklyn Golden Road Street,
                                                <br />
                                                New York. USA
                                            </p>
                                        </div>
                                        <div className='footer-widget-contact-list'>
                                            <i className='fa-solid fa-envelope' />
                                            <div className='footer-widget-contact-item'>
                                                <a href='mailto:needhelp@company.com'>needhelp@company.com</a>
                                            </div>
                                        </div>
                                        <div className='footer-widget-contact-list'>
                                            <i className='fa-solid fa-phone' />
                                            <div className='footer-widget-contact-item'>
                                                <a href='tel:+92-003-68-090'>+92 (003) 68-090</a>
                                            </div>
                                        </div> */}
                                    </div>
                                    {/*footer-widget*/}
                                </div>
                                {/*col-lg-3*/}
                            </div>
                            {/* row */}
                        </div>
                        {/* container */}
                    </div>
                    {/*footer-inner*/}
                    <div className='bottom-footer'>
                        <div className='conatiner'>
                            <p>© Copyright 2023 by Company.com</p>
                        </div>
                        {/* container */}
                    </div>
                    {/*bottom-footer*/}
                </section>
                {/*footer*/}
                <div className='mobile-nav-wrapper'>
                    <div className='mobile-nav-overlay mobile-nav-toggler' />
                    {/* mobile-nav-overlay */}
                    <div className='mobile-nav-content'>
                        <a href='#' className='mobile-nav-close mobile-nav-toggler'>
                            <span />
                            <span />
                        </a>
                        {/* mobile-nav-close */}
                        <div className='logo-box'>
                            <a href='index.html'>
                                {/* <img src={window.location.origin + "/src/assets/template/image/logo-light.png"} width={160} height={40} alt={26} /> */}
                                <img src={window.location.origin + "/src/assets/template/image/logo-light.png"} width={160} height={40} />
                            </a>
                        </div>
                        {/* logo-box */}
                        <div className='mobile-nav-container' />
                        {/* mobile-nav-container */}
                        <ul className='mobile-nav-contact list-unstyled'>
                            <li>
                                <i className='fa-solid fa-phone' />
                                <a href='tel:+8898006802'>+ 88 ( 9800 ) 6802</a>
                            </li>
                            {/* li */}
                            <li>
                                <i className='fa-solid fa-envelope' />
                                <a href='mailto:needhelp@company.com'>needhelp@company.com</a>
                            </li>
                            {/* li */}
                            <li>
                                <i className='fa-solid fa-map-marker-alt' />
                                88 Broklyn Golden Road Street <br /> New York. USA
                            </li>
                            {/* li */}
                        </ul>
                        {/* mobile-nav-contact */}
                        <ul className='mobile-nav-social list-unstyled'>
                            <li>
                                <a href='#'>
                                    <i className='fa-brands fa-twitter' />
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <i className='fa-brands fa-facebook' />
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <i className='fa-brands fa-pinterest-p' />
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <i className='fa-brands fa-instagram' />
                                </a>
                            </li>
                        </ul>
                        {/* mobile-nav-social */}
                    </div>
                    {/* mobile-nav-content */}
                </div>
                {/*mobile-nav-wrapper*/}
                <div className='search-popup'>
                    <div className='search-popup-overlay search-toggler' />
                    {/* search-popup-overlay */}
                    <div className='search-popup-content'>
                        <form action='#'>
                            <label htmlFor='search' className='sr-only'>
                                search here
                            </label>
                            {/* sr-only */}
                            <input type='text' id='search' placeholder='Search Here...' />
                            <button type='submit' aria-label='search submit' className='search-btn'>
                                <span>
                                    <i className='flaticon-search-interface-symbol' />
                                </span>
                            </button>
                            {/* search-btn */}
                        </form>
                        {/* form */}
                    </div>
                    {/* search-popup-content */}
                </div>
                {/* search-popup */}
                {/* <a href='#' className='scroll-to-top scroll-to-target' data-target='html'>
                    <i className='fa-solid fa-arrow-up' />
                </a> */}
            </div>
        </>
    )
}

export default GuestLayout
