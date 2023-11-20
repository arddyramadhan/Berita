import React from "react"

const CardKegiatan = ({ item }) => {
    return (
        <div className='col-12 col-lg-6 col-xl-6'>
            <div className='event-card'>
                <div className='event-card-image'>
                    <div className='event-card-image-inner'>
                        <a href='event-details.html'>
                            <img src={!item.foto ? "./src/assets/template/download.jpeg" : item.foto} style={{ height: "250px", width: "250px" }} className='img-fluid' alt='img-164' />
                        </a>
                        <div className='event-card-meta'>
                            <div className='event-meta-number'>
                                <span>{item.tgl_mulai}</span>
                            </div>
                            <div className='event-meta-date'>
                                <span>
                                    {item.bln_mulai} {item.tahun_mulai}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='event-card-content'>
                    <div className='event-card-info'>
                        <ul className='list-unstyled'>
                            <li>
                                <i className='fa-solid fa-clock' />
                                <span>
                                    {item.waktu_mulai} - {item.waktu_selesai}
                                </span>
                            </li>

                            <li>
                                <i className='fa-sharp fa-solid fa-location-pin' />
                                <span>{item.alamat}</span>
                            </li>
                        </ul>
                    </div>

                    <div className='event-card-title'>
                        <h4>
                            <a href='event-details.html'>{item.nama}</a>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardKegiatan
