import { Link, Navigate, useNavigate } from "react-router-dom"
import { Outlet } from "react-router-dom"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const GuestLayout = () => {
    // const { user, loading } = useAuth()
    
    const { is_login, user, loading } = useSelector((state) => state.auth)
    const navigate = useNavigate()
    const [activLink, setActiveLink] = useState('home')
    return !user ? (
        <>
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
                                            <a href='mailto:needhelp@company.com'>needhelp@company.com</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='topbar-icon'>
                                            <i className='fa-solid fa-clock' />
                                        </div>
                                        <div className='topbar-text'>
                                            <span>Open Hours: Mon - Fri 8.00 am - 6.00 pm</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='topbar-right'>
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
                        </div>
                    </div>
                </div>
                <div className='main-menu sticky-header'>
                    <div className='main-menu-inner'>
                        <div className='main-menu-left'>
                            <div className='main-menu-logo'>
                                <a href='index.html'>
                                    <img src='./src/assets/template/image/logo.png' alt='img-1' width={140} />
                                </a>
                            </div>
                            <div className='navigation'>
                                <ul className='main-menu-list list-unstyled'>
                                    <li className={activLink == "home" ? "active" : ""}>
                                        <a
                                            onClick={() => {
                                                setActiveLink("home")
                                            }}
                                            style={{ cursor: "pointer" }}>
                                            {" "}
                                            Home
                                        </a>
                                    </li>
                                    {/* <li className='active has-dropdown'>
                                        <a href='#'>Home</a>
                                        <ul className='list-unstyled'>
                                            <li>
                                                <a href='index.html'>Home 1</a>
                                            </li>
                                            <li>
                                                <a href='index-2.html'>Home 2</a>
                                            </li>
                                        </ul>
                                    </li> */}
                                    <li className={activLink == "admin" ? "active has-dropdown" : "has-dropdown"}>
                                        <a>Admin</a>
                                        <ul className='list-unstyled'>
                                            <li>
                                                <a
                                                    onClick={() => {
                                                        setActiveLink("admin")
                                                    }}
                                                    style={{ cursor: "pointer" }}>
                                                    {" "}
                                                    Kategori
                                                </a>
                                            </li>
                                            <li>
                                                <Link to={""}>Team</Link>
                                            </li>
                                            <li>
                                                <Link to={""}>Team Details</Link>
                                            </li>
                                            <li>
                                                <Link to={""}>Portfolio</Link>
                                            </li>
                                            <li>
                                                <Link to={""}>Portfolio Details</Link>
                                            </li>
                                            <li>
                                                <Link to={""}>Causes</Link>
                                            </li>
                                            <li>
                                                <Link to={""}>Cause Details</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className='has-dropdown'>
                                        <a href='#'>Services</a>
                                        <ul className='list-unstyled'>
                                            <li>
                                                <a href='services.html'>Services</a>
                                            </li>
                                            <li>
                                                <a href='service-details.html'>Service Details</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className='has-dropdown'>
                                        <a href='#'>Departments</a>
                                        <ul className='list-unstyled'>
                                            <li>
                                                <a href='departments.html'>Departments</a>
                                            </li>
                                            <li>
                                                <a href='department-details.html'>Department Details</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className='has-dropdown'>
                                        <a href='#'>Events</a>
                                        <ul className='list-unstyled'>
                                            <li>
                                                <a href='events.html'>Events</a>
                                            </li>
                                            <li>
                                                <a href='event-details.html'>Event Details</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className='has-dropdown'>
                                        <a href='#'>News</a>
                                        <ul className='list-unstyled'>
                                            <li>
                                                <a href='news.html'>News</a>
                                            </li>
                                            <li>
                                                <a href='news-details.html'>News Details</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
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
                            <div className='main-menu-right-button'>
                                <a href='contact.html' className='btn btn-primary'>
                                    Report Issue
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
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
                                            <img src='./src/assets/template/image/logo-light.png' className='img-fluid' alt='img-25' />
                                        </a>
                                    </div>
                                    {/* footer-widget-logo */}
                                    <div className='footer-widget-text'>
                                        <p>The gowrnx official guide to living, working, visiting and investing in the Texas</p>
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
                                        <div className='footer-widget-explore'>
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
                                            {/* list-unstyled */}
                                        </div>
                                        {/* footer-widget-explore */}
                                    </div>
                                    {/*footer-widget*/}
                                </div>
                                {/*col-lg-3*/}
                                <div className='col-lg-2'>
                                    <div className='footer-widget'>
                                        <div className='footer-widget-department'>
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
                                            {/* list-unstyled */}
                                        </div>
                                        {/* footer-widget-department */}
                                    </div>
                                    {/*footer-widget*/}
                                </div>
                                {/*col-lg-2*/}
                                <div className='col-lg-3'>
                                    <div className='footer-widget'>
                                        <div className='footer-widget-contact'>
                                            <h4 className='footer-widget-title'>Contact</h4>
                                            <p>
                                                88 Broklyn Golden Road Street,
                                                <br />
                                                New York. USA
                                            </p>
                                        </div>
                                        {/* footer-widget-contact */}
                                        <div className='footer-widget-contact-list'>
                                            <i className='fa-solid fa-envelope' />
                                            <div className='footer-widget-contact-item'>
                                                <a href='mailto:needhelp@company.com'>needhelp@company.com</a>
                                            </div>
                                            {/* footer-widget-contact-item */}
                                        </div>
                                        {/* footer-widget-contact-list */}
                                        <div className='footer-widget-contact-list'>
                                            <i className='fa-solid fa-phone' />
                                            <div className='footer-widget-contact-item'>
                                                <a href='tel:+92-003-68-090'>+92 (003) 68-090</a>
                                            </div>
                                            {/* footer-widget-contact-item */}
                                        </div>
                                        {/* footer-widget-contact-list */}
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
                                <img src='./src/assets/template/image/logo-light.png' width={160} height={40} alt={26} />
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
    ) : (
        <Navigate to={"/dashboard"} />
    )
}

export default GuestLayout
