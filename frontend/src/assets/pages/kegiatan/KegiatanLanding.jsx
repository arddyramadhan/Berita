import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActiveLink } from '../../../feature/authSlice';
import { getKegiatan } from './../../../feature/kegiatanSlice';
import CardKegiatan from './CardKegiatan';
import PaginateCoolDetail from './../../components/PaginateCoolDetail';
import swal from 'sweetalert';
const KegiatanLanding = () => {
    const dispatch = useDispatch()
    const { data_kegiatan, loading_kegiatan, meta, page } = useSelector((state) => state.kegiatan)

    const loop = () => {   
    }

    const handleOld = () => {
        if (page >= meta.last_page) {
            swal("Informasi", "Data tidak ditemukan", "warning")
        } else {
            var pg = page + 1
            dispatch(getKegiatan(pg))
        }
    }
    const handleNew= () => {
        if (page <= 1) {
            swal("Informasi", "Sekarang anda berada dihalaman Kegiaran terbaru", "warning")
        } else {
            var pg = page - 1
            dispatch(getKegiatan(pg))
        }
    }

    useEffect(() => {
        dispatch(ActiveLink('kegiatan'))
        dispatch(getKegiatan(page))
    }, [dispatch])
    return (
        <div>
            <section className='page-banner'>
                <div className='container'>
                    <div className='page-breadcrumbs'>
                        <ul className='list-unstyled'>
                            <li>
                                <a href='index.html'>Home</a>
                            </li>
                            <li>Kegiatan</li>
                        </ul>
                    </div>
                    <div className='page-banner-title'>
                        <h3>Kegiatan</h3>
                    </div>
                </div>
            </section>
            <section className='blog-section blog-section-two'>
                <div className='container'>
                    <div className='row row-gutter-y-155'>
                        {!loading_kegiatan
                            ? data_kegiatan &&
                              data_kegiatan.map((item) => {
                                  return <CardKegiatan key={item.id} item={item} />
                              })
                            : loop()}
                    </div>
                </div>
            </section>
            <div className='d-flex justify-content-center'>
                {/* <Paginate page={page} handlePage={handlePage} last_page={meta.last_page} /> */}
                <PaginateCoolDetail kiri={"Kegiatan Terbaru"}  kanan={"Kegiatan Terdahulu"} handleKiri={handleNew} handleKanan={handleOld} />
            </div>
        </div>
    )
}

export default KegiatanLanding
