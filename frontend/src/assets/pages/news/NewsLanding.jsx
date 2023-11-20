import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ActiveLink } from "../../../feature/authSlice"
import { getBerita, setPage } from "../../../feature/beritaSlice"
import PaginateCool from "./../../components/PaginateCool"
import CardNewsComponent from "../../components/CardNewsComponent"
import CardNewsSkeletonComponent from "./../../components/CardNewsSkeletonComponent"
import Baner from "./../../components/Baner"
import { Link } from "react-router-dom"

const NewsLanding = () => {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)
    const { data_berita, loading_berita, page, meta } = useSelector((state) => state.berita)

    const handlePage = async (handle_page) => {
        await dispatch(setPage(handle_page))
        await dispatch(getBerita(page))
        console.log(handle_page)
    }

    const loop = (jumlah) => {
        const data_loop = []
        for (let index = 1; index <= jumlah; index++) {
            data_loop.push(<CardNewsSkeletonComponent key={index} />)
        }
        return data_loop
    }

    useEffect(() => {
        dispatch(getBerita(page))
        dispatch(ActiveLink("news"))
    }, [dispatch])

    return (
        <div>
            <Baner title={"Berita"} sub={"Berita"} />
            <section className='blog-section pt-5 blog-section-two'>
                <div className='container pb-5 mb-5'>
                    <div className='d-flex justify-content-end mb-5 px-4'>
                        {user && (
                            <Link to={"/news/add"} className='btn btn-secondary rounded'>
                                Tambah Berita
                            </Link>
                        )}
                    </div>
                </div>
                <div className='container'>
                    <div className='row row-gutter-y-155'>
                        {!loading_berita
                            ? data_berita &&
                              data_berita.map((item) => {
                                  return <CardNewsComponent key={item.id} item={item} />
                              })
                            : loop(15)}
                    </div>
                </div>
            </section>
            <div className='d-flex justify-content-center'>
                {/* <Paginate page={page} handlePage={handlePage} last_page={meta.last_page} /> */}
                <PaginateCool kiri={"Berita Terbaru"} last_page={meta.last_page} kanan={"Berita Terdahulu"} handlePage={handlePage} page={page} />
            </div>
        </div>
    )
}

export default NewsLanding
