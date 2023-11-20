import React from 'react'

const Baner = ({...props}) => {
    return (
        <section className='page-banner'>
            <div className='container'>
                <div className='page-breadcrumbs'>
                    <ul className='list-unstyled'>
                        <li>
                            {/* <a href='index.html'>Home</a> */}
                            {props.main_sub ?? 'Home'}
                        </li>
                        <li>{props.sub}</li>
                    </ul>
                </div>
                <div className='page-banner-title'>
                    <h3>{props.title}</h3>
                </div>
            </div>
        </section>
    )
}

export default Baner