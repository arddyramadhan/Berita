import React from "react"
import Baner from "./../../components/Baner"

const Profil = () => {
    return (
        <>
            <Baner title={"Profil"} sub={"Profil"} main_sub={"Tentang"} />
            <div className='container mt-5'>
                <div className='row row-gutter-y-40'>
                    <div className='col-lg-12 col-xl-6'>
                        <div className='about-one-inner'>
                            <div className='section-tagline'>profil bkad</div>
                            {/* section-tagline */}
                            <h2 className='section-title'>Selamat Datang di Badan Keuangan dan Aset Daerah Kabupaten Gorontalo</h2>
                            <p>
                                Aliquam viverra arcu. Donec aliquet blandit enim feugiat. Suspendisse id quam sed eros tincidunt luctus sit amet eu nibh egestas tempus turpis, sit amet mattis magna
                                varius non.
                            </p>
                            <h5 className='about-one-inner-text'>Denounce with righteous indignation and dislike men who are so beguiled &amp; demoralized our power.</h5>
                        </div>
                        {/* about-one-inner */}
                    </div>
                    {/*col-lg-6*/}
                    <div className='col-lg-12 col-xl-6'>
                        <div className='about-one-image'>
                            <img src={window.location.origin + "/src/assets/template/image/shapes/shape-1.png"} className='floated-image-one' alt='img-58' />
                            <img src={window.location.origin + "/src/assets/template/image/gallery/about-7.jpg"} alt='img-59' className='img-fluid' />
                        </div>
                        {/*about-one-image*/}
                    </div>
                    {/*col-lg-6*/}
                </div>
                {/* row */}
            </div>
        </>
    )
}

export default Profil
