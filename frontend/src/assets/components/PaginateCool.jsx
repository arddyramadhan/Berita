import React, { useEffect } from "react"
import swal from "sweetalert"
const PaginateCool = ({ ...props }) => {
    return (
        <div className='container'>
            <div className='portfolio-details-nav-inner'>
                <div className='portfolio-details-nav-item prev-item'>
                    <div className='portfolio-details-nav-icon'>
                        <a
                            href=''
                            onClick={(e) => {
                                e.preventDefault()
                                if (props.page == 1) {
                                    swal("Data Tidak Ditemukan", "Saat ini anda berada di berita yang paling terbaru", "error")
                                } else {
                                    props.handlePage(props.page - 1)
                                }
                            }}>
                            <i className='fa-solid fa-arrow-left-long' />
                        </a>
                    </div>
                    <div className='portfolio-details-nav-content'>
                        <h5>
                            <a
                                href=''
                                onClick={(e) => {
                                    e.preventDefault()
                                    if (props.page == 1) {
                                        swal("Data Tidak Ditemukan", "Saat ini anda berada di berita yang paling terbaru", "error")
                                    } else {
                                        props.handlePage(props.page - 1)
                                    }
                                }}>
                                {props.kiri}
                            </a>
                        </h5>
                    </div>
                </div>
                <div className='portfolio-details-nav-item next-item'>
                    <div className='portfolio-details-nav-icon'>
                        <a
                            href=''
                            onClick={(e) => {
                                e.preventDefault()
                                if (props.page == props.last_page) {
                                    swal("Data Tidak Ditemukan", "Saat ini anda berada di berita yang paling Terdahulu", "error")
                                } else {
                                    props.handlePage(props.page + 1)
                                }
                            }}>
                            <i className='fa-solid fa-arrow-right-long' />
                        </a>
                    </div>
                    <div className='portfolio-details-nav-content'>
                        <h5>
                            <a
                                href=''
                                onClick={(e) => {
                                    e.preventDefault()
                                if (props.page == props.last_page) {
                                    swal("Data Tidak Ditemukan", "Saat ini anda berada di berita yang paling Terdahulu", "error")
                                } else {
                                    props.handlePage(props.page + 1)
                                }
                                }}>
                                {props.kanan}
                            </a>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaginateCool
