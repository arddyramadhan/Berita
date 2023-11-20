import React from "react"

const PenggunaCardLoading = ({ jumlah }) => {

    const skeleton = () => {
        const data = []
        for (let index = 1; index <= jumlah; index++) {
            data.push(
                <div key={index} className='col-12 col-md-6 col-xl-3'>
                    <div className='team-card'>
                        <div className='team-card-img'>
                            {/* <img src={window.location.origin + "/src/assets/template/image/team/team-1.jpg"} className='img-fluid' alt='img-78' /> */}
                            <div className='spinner-border' style={{ width: "13rem", height: "13rem", color:'lightgreen' }} role='status'>
                                <span className='visually-hidden'>Loading...</span>
                            </div>
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
                                <a href='team-details.html'>...........</a>
                            </h4>
                            <p>.............</p>
                        </div>
                        {/* team-card-content */}
                    </div>
                    {/*team-card*/}
                </div>,
            )
        }
        return data
    }

    return (<>
        {skeleton()}
    </>)
}

export default PenggunaCardLoading
