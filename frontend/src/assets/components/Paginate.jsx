import React, { useEffect } from "react"
const Paginate = ({ ...props }) => {
    const list_paginate = () => {
        var jumlah = []
        for (let i = 1; i <= props.last_page; i++) {
            jumlah.push(
                <li key={i} className={props.page == i ? "page-item" : "page-item"}>
                    <button
                        onClick={() => {
                            props.handlePage(i)
                        }}
                        className={props.page == i ? "page-link text-white bg-success" : "page-link"}>
                        {i}
                    </button>
                </li>,
            )
        }
        return jumlah
    }

    return (
        <ul className='pagination'>
            <li className={props.page == 1 ? "page-item disabled" : "page-item"}>
                <button
                    onClick={() => {
                        props.handlePage(props.page - 1)
                    }}
                    className={"page-link"}>
                    Previous
                </button>
            </li>
            {list_paginate()}
            <li className={props.page == props.last_page ? "page-item disabled" : "page-item"}>
                <button
                    onClick={() => {
                        props.handlePage(props.page + 1)
                    }}
                    className='page-link'>
                    Next
                </button>
            </li>
        </ul>
    )
}

export default Paginate
