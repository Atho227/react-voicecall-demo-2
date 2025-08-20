import React, { useState } from 'react'

const BasicSwitch = ({
    switchStatus = true,
    switchText = false,
    style = {},       // prop style
    className = ''    // prop className bổ sung
}) => {
    const [isActive, setIsActive] = useState(switchStatus);

    return (
        <div
            className={`switch-wrapper ${className}`}
            style={style}
            onClick={() => setIsActive(!isActive)}
        >
            <div className={`switch ${isActive ? 'active' : ''}`}>
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
