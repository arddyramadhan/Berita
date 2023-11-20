import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { ActiveLink } from "../../../feature/authSlice"
import { getDetail } from "../../../feature/beritaSlice"
import PaginateCool from "./../../components/PaginateCool"

const NewsDetail = () => {
    const dispatch = useDispatch()
    const { slug } = useParams()
    const { detail_berita, loading_berita, new_detail, old_detail } = useSelector((state) => state.berita)

    const handlePage = async (handle_page) => {
        // await dispatch(setPage(handle_page))
        // await dispatch(getBerita(page))
        console.log(handle_page)
    }
    
    useEffect(() => {
        // console.log(slug);
        dispatch(getDetail(slug))
        dispatch(ActiveLink("news"))
    }, [dispatch])
    return (
        <>
            <section className='page-banner'>
                <div className='container'>
                    <div className='page-breadcrumbs'>
                        <ul className='list-unstyled'>
                            <li>
                                <a href='index.html'>News</a>
                            </li>
                            <li>Detail</li>
                        </ul>
                    </div>
                    <div className='page-banner-title'>
                        <h3>Berita</h3>
                    </div>
                </div>
            </section>
            {!loading_berita ? (
                <section className='news-details-section'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-8'>
                                <div className='news-details-box-image'>
                                    <div className='news-details-box-image-inner'>
                                        <img src={window.location.origin + "/src/assets/template/image/blog/blog-details-1.jpg"} className='img-fluid' alt='img-193' />
                                        <a href='news-details.html' className='news-details-box-date'>
                                            28 SEP
                                        </a>
                                    </div>
                                </div>

                                <div className='news-details-meta-box'>
                                    <div className='news-details-meta-box-inner'>
                                        <span className='author'>
                                            by<a href='news-details.html'>Admin</a>
                                        </span>

                                        <span className='comment'>
                                            <a href='news-details.html'>02 Comments</a>
                                        </span>
                                    </div>
                                </div>

                                <div className=''>
                                    <h4>{detail_berita.judul}</h4>
                                    <p>
                                        {detail_berita.isi}
                                    </p>
                                </div>
                            </div>

                            <div className='col-lg-4'>
                                <div className='sidebar'>
                                    <div className='sidebar-form-content'>
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
                                    </div>

                                    <div className='sidebar-widget sidebar-widget-recent-post'>
                                        <h4>Recent Posts</h4>
                                        <div className='sidebar-recent-post'>
                                            <div className='sidebar-recent-post-img'>
                                                <img src={window.location.origin + "/src/assets/template/image/blog/blog-details-2.jpg"} alt='img-197' />
                                            </div>

                                            <div className='sidebar-recent-post-content'>
                                                <div className='sidebar-meta'>
                                                    <div className='sidebar-meta-item'>
                                                        <div className='sidebar-meta-icon'>
                                                            <span className='author'>
                                                                by<a href='news-details.html'>Admin</a>
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className='sidebar-post-title'>
                                                        <h5>
                                                            <a href='#'>Learn how access to municipal council</a>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='sidebar-recent-post'>
                                            <div className='sidebar-recent-post-img'>
                                                <img src={window.location.origin + "/src/assets/template/image/blog/blog-details-3.jpg"} alt='img-198' />
                                            </div>

                                            <div className='sidebar-recent-post-content'>
                                                <div className='sidebar-meta'>
                                                    <div className='sidebar-meta-item'>
                                                        <div className='sidebar-meta-icon'>
                                                            <span className='author'>
                                                                by<a href='news-details.html'>Admin</a>
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className='sidebar-post-title'>
                                                        <h5>
                                                            <a href='#'>Learn how access to municipal council</a>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='sidebar-recent-post'>
                                            <div className='sidebar-recent-post-img'>
                                                <img src={window.location.origin + "/src/assets/template/image/blog/blog-details-4.jpg"} alt='img-199' />
                                            </div>

                                            <div className='sidebar-recent-post-content'>
                                                <div className='sidebar-meta'>
                                                    <div className='sidebar-meta-item'>
                                                        <div className='sidebar-meta-icon'>
                                                            <span className='author'>
                                                                by<a href='news-details.html'>Admin</a>
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className='sidebar-post-title'>
                                                        <h5>
                                                            <a href='#'>Learn how access to municipal council</a>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='sidebar-widget sidebar-widget-recent-category'>
                                        <div className='sidebar-widget-recent-category-box'>
                                            <h4 className='section-title text-left'>Categories</h4>
                                            <ul className='list-unstyled'>
                                                <li>
                                                    <a href='news-details.html'>
                                                        City News
                                                        <i className='fa-solid fa-chevron-right' />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='news-details.html'>
                                                        Community
                                                        <i className='fa-solid fa-chevron-right' />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='news-details.html'>
                                                        Culture <i className='fa-solid fa-chevron-right' />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='news-details.html'>
                                                        Devlopement
                                                        <i className='fa-solid fa-chevron-right' />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='news-details.html'>
                                                        Government
                                                        <i className='fa-solid fa-chevron-right' />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <div className='sidebar-widget sidebar-widget-tag'>
                                    <h4>Tags</h4>
                                    <div className='sidebar-widget-tag-inner'>
                                        <a href='news-details.html'>Culture</a>
                                        <a href='news-details.html'>Government</a>
                                        <a href='news-details.html'>City</a>
                                        <a href='news-details.html'>Development</a>
                                        <a href='news-details.html'>Life</a>
                                    </div>
                                </div> */}
                                </div>
                            </div>

                            <PaginateCool kiri={"Berita Terbaru"} last_page={10} kanan={"Berita Terdahulu"} handlePage={handlePage} page={1} />
                        </div>
                    </div>
                </section>
            ) : (
                <div>Loding Data</div>
            )}
        </>
    )
}

export default NewsDetail
