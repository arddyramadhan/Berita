import React from "react"

const DetailSkeleton = () => {
    return (
        <section className='news-details-section'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8'>
                        <div className='news-details-box-image'>
                            <div className='news-details-box-image-inner'>
                                <div className='p-5 skeleton-box' style={{ width: "auto", height: "350px" }}>
                                    {/* <img src={window.location.origin + "/src/assets/template/image/blog/blog-details-1.jpg"} className='img-fluid' alt='img-193' /> */}
                                </div>
                            </div>
                        </div>

                        <div className='news-details-meta-box'>
                            <div className='news-details-meta-box-inner'>
                                <div className='container d-flex justify-content-start gap-2'>
                                    <div className='col-md-1 rounded skeleton-box p-2'></div>
                                    <div className='col-md-2 rounded skeleton-box p-2'></div>
                                </div>
                            </div>
                        </div>

                        <div className='row px-5 pt-3 gap-4'>
                            <div className='col-md-6 rounded skeleton-box pt-2 pb-3' />
                            <div className='col-md-12 rounded  skeleton-box p-2' />
                            <div className='col-md-12 rounded  skeleton-box p-2' />
                            <div className='col-md-12 rounded  skeleton-box p-2' />
                            <div className='col-md-12 rounded  skeleton-box p-2' />
                            <div className='col-md-12 rounded  skeleton-box p-2' />
                            <div className='col-md-12 rounded  skeleton-box p-2' />
                            <div className='col-md-12 rounded  skeleton-box p-2' />
                            <div className='col-md-12 rounded  skeleton-box p-2' />
                            <div className='col-md-12 rounded  skeleton-box p-2' />
                            <div className='col-md-12 rounded  skeleton-box p-2' />
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='sidebar'>
                            {/* <div className='sidebar-form-content'>
                                <div className='sidebar__item sidebar__item--search'>
                                    <form action='#' className='sidebar__search'>
                                        <label htmlFor='search' className='sr-only'>
                                            search here
                                        </label>

                                        <input type='text' placeholder='Search Here' />
                                        <button type='submit' aria-label='search submit' className='thm-btn'>
                                            <i className='flaticon-search-interface-symbol' />
                                        </button>
                                    </form>
                                </div>
                            </div> */}

                            <div className='sidebar-widget sidebar-widget-recent-post'>
                                <div className='row mb-2'>
                                    <div className='col-md-6 rounded skeleton-box pt-2 pb-3' />
                                </div>
                                <div className='row '>
                                    <div className='rounded skeleton-box p-5'/>
                                </div>

                                <div className='row mb-2 mt-4'>
                                    <div className='col-md-6 rounded skeleton-box pt-2 pb-3' />
                                </div>
                                <div className='row '>
                                    <div className='rounded skeleton-box p-5'/>
                                </div>
                                {/* <div className='row mb-2 mt-4'>
                                    <div className='col-md-6 rounded skeleton-box pt-2 pb-3' />
                                </div>
                                <div className='row '>
                                    <div className='rounded skeleton-box p-5'/>
                                </div> */}
                            </div>

                            <div className='sidebar-widget sidebar-widget-recent-post'>
                                <div className='row mb-4'>
                                    <div className='col-md-6 rounded skeleton-box pt-2 pb-3' />
                                </div>
                                <div className='row '>
                                    <div className='rounded skeleton-box p-2'/>
                                </div>
                                <hr style={{ color: "darkgray" }} />
                                <div className='row '>
                                    <div className='rounded skeleton-box p-2'/>
                                </div>
                                <hr style={{ color: "darkgray" }} />
                                <div className='row '>
                                    <div className='rounded skeleton-box p-2'/>
                                </div>
                                <hr style={{ color: "darkgray" }} />
                                <div className='row '>
                                    <div className='rounded skeleton-box p-2'/>
                                </div>
                                <hr style={{ color: "darkgray" }} />
                            </div>
                        </div>
                    </div>

                    {/* <PaginateCoolDetail kiri={"Berita Terbaru"} kanan={"Berita Terdahulu"} handleKanan={handleOld} handleKiri={handleNew} /> */}
                </div>
            </div>
        </section>
    )
}

export default DetailSkeleton
