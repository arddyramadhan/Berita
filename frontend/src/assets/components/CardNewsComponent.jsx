import React from 'react'
import { Link } from 'react-router-dom'

const CardNewsComponent = ({item}) => {
    return (
        <div className='col-lg-6 col-xl-4'>
            <div className='blog-card'>
                <div className='blog-card-image'>
                    <img style={{ height: 275, width: 465 }} src={item.foto == '' ? "./src/assets/template/image/blog/blog-1.jpg" : item.foto} className='img-fluid' alt='img-184' />
                    <Link to={"/news/" + item.slug} />
                </div>
                <div className='blog-card-date'>
                    <Link to={"/news/" + item.slug} className={"text-dark"}>
                        {item.tgl_berita}
                    </Link>
                </div>
                <div className='blog-card-content'>
                    <div className='blog-card-meta'>
                        <span className='author'>
                            by<Link to={"/news/" + item.slug}>{item.kategori.nama}</Link>
                        </span>

                        <span className='comment'>
                            <Link to={"/news/" + item.slug}>02 Comments</Link>
                        </span>
                    </div>

                    <h4>
                        <Link to={"/news/" + item.slug}>{item.judul}</Link>
                    </h4>
                    <p>{item.limit_isi}....</p>
                </div>
            </div>
        </div>
    )
}

export default CardNewsComponent