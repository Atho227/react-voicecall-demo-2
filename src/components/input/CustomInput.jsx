import React from 'react'
import './CustomInput.css'

const CustomInput = ({ label = false, value, state = 'normal', onChange }) => {
    return (
        <div className='custom-input-container'>
            {label && (<label>{label}</label>)}
            <div className="custom-input-wrapper">
                <input type="text" />
            </div>
        </div>
    )
}

export default CustomInput