import React from 'react'

const NormalButton = ({
    text = 'Default', icon: Icon, iconFont, style, onClick
}) => {
    return (
        <button className='btn-style-1' style={{ cursor: 'pointer', ...style }} onClick={onClick}>
            {Icon ? <Icon /> : ''}
            <span style={{ ...style }}>{text}</span>
        </button>
    )
}

export default NormalButton