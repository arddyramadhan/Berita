import React from "react"

const CardNewsSkeletonComponent = () => {
    return (
        <div className='col-lg-6 col-xl-4 .skeleton'>
            <div className='blog-card'>
                <div className='blog-card-image '>
                    <div className='skeleton-box col-12' style={{ marginTop: "-121px", height: "255px", width: "", position: "absolute" }}></div>
                </div>
                <div className='blog-card-content' style={{ height: "350px", paddingTop: "171px" }}>
                    <div className='d-flex px-5'>
                        <div className="skeleton-box" style={{ borderRadius: '20px',height:'30px' }}></div>
                        {/* <div className='skeleton-circle box'>
                        </div> */}
                    </div>
                    <div className='d-flex mt-3'>
                        <div className="skeleton-box col-12" style={{ borderRadius: '10px',height:'10px' }}></div>
                        {/* <div className='skeleton-circle box'>
                        </div> */}
                    </div>
                    <div className='d-flex mt-3'>
                        <div className="skeleton-box col-12" style={{ borderRadius: '10px',height:'10px' }}></div>
                        {/* <div className='skeleton-circle box'>
                        </div> */}
                    </div>
                    <div className='d-flex mt-3'>
                        <div className="skeleton-box col-12" style={{ borderRadius: '10px',height:'10px' }}></div>
                        {/* <div className='skeleton-circle box'>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardNewsSkeletonComponent
