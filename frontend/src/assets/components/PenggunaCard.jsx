import React from "react"

const PenggunaCard = ({data}) => {
    return (
        <>
            <div className='col-12 col-md-6 col-xl-3'>
                <div className='team-card'>
                    <div className='team-card-img'>
                        <img src={data.foto ? data.foto : window.location.origin + "/src/assets/template/image/team/team-1.jpg"} className='img-fluid' alt='img-78' />
                        <div className='team-card-icon'>
                            <a href='#' className='pinterest'>
                                <i className='fa-brands fa-pinterest-p' />
                            </a>
                            <a href='#' className='twitter'>
                                <i className='fa-brands fa-twitter' />
                            </a>
                            <a href='#' className='facebook'>
                                <i className='fa-brands fa-facebook' />
                            </a>
                        </div>
                        {/* team-card-icon */}
                    </div>
                    {/* team-card-img */}
                    <div className='team-card-content'>
                        <h4>
                            <a href='team-details.html'>{data.nama}</a>
                        </h4>
                        <p>{data.jabatan}</p>
                    </div>
                    {/* team-card-content */}
                </div>
                {/*team-card*/}
            </div>
        </>
    )
}

export default PenggunaCard
