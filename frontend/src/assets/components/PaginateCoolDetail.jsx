import React from "react"
import swal from "sweetalert"
const PaginateCoolDetail = ({ ...props }) => {

    //? prosp:  handleKiri(), handleKanan(), kiri, kanan
    return (
        <div className='container'>
            <div className='portfolio-details-nav-inner'>
                <div className='portfolio-details-nav-item prev-item'>
                    <div className='portfolio-details-nav-icon'>
                        <a
                            href=''
                            onClick={(e) => {
                                e.preventDefault()
                                props.handleKiri()
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
                                    props.handleKiri()
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
                                props.handleKanan()
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
                                    props.handleKanan()
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

export default PaginateCoolDetail
