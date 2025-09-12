import React, { useState } from 'react'

const BasicSwitch = ({
    switchStatus = true,
    switchText = false,
    style = {},
    className = '',
    onClick
}) => {
    return (
        <div
            aria-description='BasicSwitch'
            className={`switch-wrapper ${className}`}
            style={style}
            onClick={onClick}
        >
            <div className={`switch ${switchStatus ? 'active' : ''}`}>
                <div className="switch-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="8" fill="white" />
                    </svg>
                </div>
            </div>
            {switchText ? <div className="switch-text">{switchText}</div> : null}
        </div>
    )
}


export default BasicSwitch
