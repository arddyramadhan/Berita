import React, { useEffect } from "react"
import Baner from "../../components/Baner"
import { ActiveLink } from "../../../feature/authSlice"
import { useDispatch } from "react-redux"

const Galeri = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(ActiveLink("galeri"))
    }, [dispatch])
    return (
        <>
            <Baner title={"Galeri"} sub={"Galeri"} />
            <section className='container my-5'>
                <div className='row row-gutter-30'>
                    <div className='col-lg-4 col-md-4'>
                        <div className='portfolio-card'>
                            <img src={window.location.origin + "/src/assets/template/image/portfolio/portfolio-9.jpg"} className='img-fluid' alt='img-97' />
                            <div className='portfolio-card-meta'>
                                <div className='portfolio-card-text'>
                                    <a href='portfolio-details.html'>Tourist</a>
                                </div>
                                <div className='portfolio-card-title'>
                                    <a href='portfolio-details.html'>Carnegie Hall</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Galeri
