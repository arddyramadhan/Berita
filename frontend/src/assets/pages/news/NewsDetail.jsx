import React, { useState } from "react"
import { useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { ActiveLink } from "../../../feature/authSlice"
import { getBerita, getDetail } from "../../../feature/beritaSlice"
// import PaginateCool from "./../../components/PaginateCool"
import PaginateCoolDetail from "../../components/PaginateCoolDetail"
import swal from "sweetalert"
import DetailSkeleton from "./skeleton/DetailSkeleton"
const NewsDetail = () => {
    const dispatch = useDispatch()
    const { slug } = useParams()
    const navigate = useNavigate()
    const { detail_berita, loading_berita, new_detail, old_detail, data_berita } = useSelector((state) => state.berita)

    const handleOld = () => {
        if (!old_detail) {
            swal("Informasi", "Saat ini anda berada di berita terdahulu", "warning")
        } else {
            // dispatch(getDetail(old_detail.slug))
            navigate("/news/" + old_detail.slug)
        }
    }

    const [recent_posts, setRecent_posts] = useState([])
    const getRecentPosts = async () => {
        await dispatch(getBerita(1))
        if (data_berita) {
            const newdata = data_berita.filter((item, index) => {
                if (index <= 2) {
                    return item
                }
            })
            console.log(newdata)
            setRecent_posts(newdata)
        }
    }

    const handleNew = () => {
        if (!new_detail) {
            swal("Informasi", "Saat ini anda berada di berita terbaru", "warning")
        } else {
            // dispatch(getDetail(new_detail.slug))
            navigate("/news/" + new_detail.slug)
        }
    }

    useEffect(() => {
        // console.log(slug);
        dispatch(getDetail(slug))
        getRecentPosts()
        dispatch(ActiveLink("news"))
    }, [dispatch, slug])

    // useEffect(() => {
    //     // console.log(slug);
    //     dispatch(getDetail(slug))
    // }, [slug])
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
                                        {/* style={{ height: 414, width: 710 }} */}
                                        <img
                                            style={{ height: 414, width: 710 }}
                                            src={detail_berita.foto != "" ? detail_berita.foto : window.location.origin + "/src/assets/template/image/blog/blog-details-1.jpg"}
                                            className='img-fluid'
                                            alt='img-193'
                                        />
                                        <a href='news-details.html' className='news-details-box-date'>
                                            {detail_berita.tgl_berita}
                                        </a>
                                    </div>
                                </div>

                                <div className='news-details-meta-box'>
                                    <div className='news-details-meta-box-inner'>
                                        <span className='author'>
                                            by<a href='news-details.html'>Admin</a>
                                        </span>
                                        {/* <span className='comment'>
                                            <a href='news-details.html'>02 Comments</a>
                                        </span> */}
                                    </div>
                                </div>

                                <div className=''>
                                    <h4>{detail_berita.judul}</h4>
                                    {/* <p>{detail_berita.isi}</p> */}
                                    <div dangerouslySetInnerHTML={{ __html: detail_berita.isi }} />
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
                                        <h4>Recent Posts</h4>
                                        {recent_posts &&
                                            recent_posts.map((item) => {
                                                return (
                                                    <div key={item.id} className='sidebar-recent-post'>
                                                        <div className='sidebar-recent-post-img'>
                                                            <img
                                                                style={{ height: 69, width: 69 }}
                                                                src={item.foto != "" ? item.foto : window.location.origin + "/src/assets/template/image/blog/blog-details-2.jpg"}
                                                                alt='img-197'
                                                            />
                                                        </div>
                                                        <div className='sidebar-recent-post-content'>
                                                            <div className='sidebar-meta'>
                                                                <div className='sidebar-meta-item'>
                                                                    <div className='sidebar-meta-icon'>
                                                                        <span
                                                                            style={{ cursor: "pointer" }}
                                                                            className='author text-dark hover:text-success'
                                                                            onClick={() => {
                                                                                // dispatch(getDetail(item.slug))
                                                                                navigate("/news/" + item.slug)
                                                                            }}>
                                                                            {/* by<Link to={"/news/"+item.slug}>Admin</Link> */}
                                                                            <span> Admin</span>
                                                                        </span>
                                                                    </div>
                                                                </div>

                                                                <div style={{ cursor: "pointer" }} className=' sidebar-post-title'>
                                                                    <h5>
                                                                        <span
                                                                            onClick={() => {
                                                                                // dispatch(getDetail(item.slug))
                                                                                navigate("/news/" + item.slug)
                                                                            }}>
                                                                            {item.judul}
                                                                        </span>
                                                                    </h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                    </div>

                                    {/* <div className='sidebar-widget sidebar-widget-recent-category'>
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
                                    </div> */}
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

                            {/* <PaginateCool kiri={"Berita Terbaru"} last_page={10} kanan={"Berita Terdahulu"} handlePage={handlePage} page={1} /> */}
                            <PaginateCoolDetail kiri={"Berita Terbaru"} kanan={"Berita Terdahulu"} handleKanan={handleOld} handleKiri={handleNew} />
                        </div>
                    </div>
                </section>
            ) : (
                <DetailSkeleton />
            )}
        </>
    )
}

export default NewsDetail
