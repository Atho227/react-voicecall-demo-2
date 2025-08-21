import React from 'react'

const IconWrap = ({ icon: Icon, fill, additionalStyle }) => {
    return (
        <div className='icon pointer' style={{ ...additionalStyle }}>
            {Icon ? (fill !== undefined ? <Icon fill={fill} /> : <Icon />) : null}
        </div>
    )
}

export default IconWrap
