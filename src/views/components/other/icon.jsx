import React from 'react'

const IconWrap = ({ icon: Icon, fill, additionalStyle, size }) => {
    return (
        <div className='icon pointer' style={{ ...additionalStyle }}>
            {Icon ? (fill !== undefined ? <Icon fill={fill} size={size} /> : <Icon />) : null}
        </div>
    )
}

export default IconWrap
