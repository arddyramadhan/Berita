import React from 'react'

const SkeletonBox = ({classname, hight}) => {
    return <div className={`${classname} skeleton-box p-1`} style={{ height: hight }}></div>
}

export default SkeletonBox