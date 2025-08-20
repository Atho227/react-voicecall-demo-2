import React from 'react'

const NormalButton = ({
    text = 'Default', icon: Icon, iconFont, color, hoverColor
}) => {
    return (
        <button className='btn-style-1'>
            {Icon ? <Icon /> : ''}
            <span>{text}</span>
        </button>
    )
}

export default NormalButton