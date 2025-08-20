import React from 'react'

const DropDown = ({ options }) => {
    return (
        <div className='input'>
            <div className="label"><span className='small-text'>Gọi từ dịch vụ</span></div>
            <div className="input-wrapper">
                <input className='input-area' type="text" />
            </div>
        </div>
    )
}

export default DropDown