import React from "react"
import Baner from "../../components/Baner"

const VisiMisi = () => {
    return (
        <>
            <Baner title={"Visi & Misi"} sub={"Visi dan Misi"} main_sub={"Tentang"} />
            <div className='container mt-5 mb-5'>
                <div className='row row-gutter-y-40'>
                    <div className='col-lg-12 col-xl-6'>
                        <div className='about-one-inner'>
                            <div className='section-tagline'>Visi dan Misi</div>
                            {/* section-tagline */}
                            <h2 className='section-title'>Visi</h2>
                            <h3>Gorontalo Gemilang, Mandiri, Menuju Masyarakat Madani</h3>
                            <h2 className='section-title'>Misi</h2>
                            <ul className='list-unstyled list-style-two'>
                                <li>
                                    <i className='fa-solid fa-circle-arrow-right' />
                                    <h5>Membangun Manusia Tangguh dan Produktif.</h5>
                                </li>
                                {/* li */}
                                <li>
                                    <i className='fa-solid fa-circle-arrow-right' />
                                    <h5>Tata Kelola Pemerintahan Bersih, Dinamis dan Terpercaya.</h5>
                                </li>
                                {/* li */}
                                <li>
                                    <i className='fa-solid fa-circle-arrow-right' />
                                    <h5>Ketahanan Ekonomi dan Pertumbuhan yang Berkualitas.</h5>
                                </li>
                                {/* li */}
                                <li>
                                    <i className='fa-solid fa-circle-arrow-right' />
                                    <h5>Meningkatkan Infrastruktur Wilayah, Membuka Konektivitas.</h5>
                                </li>
                                {/* li */}
                                <li>
                                    <i className='fa-solid fa-circle-arrow-right' />
                                    <h5>Pembangunan Berbasis Kependudukan dan Adaptasi Perubahan Iklim.</h5>
                                </li>
                                {/* li */}
                            </ul>
                            {/* ul */}
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

export default VisiMisi
