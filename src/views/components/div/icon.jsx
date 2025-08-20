import React from 'react'

const IconWrap = ({ icon: Icon, fill }) => {
    return (
        <div className='icon pointer'>
            {Icon ? (fill !== undefined ? <Icon fill={fill} /> : <Icon />) : null}
        </div>
    )
}

export default IconWrap
