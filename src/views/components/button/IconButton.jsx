import React from 'react'
import IconWrap from '../div/icon'

const IconButton = ({ icon }) => {
    return (
        <div
            style={{
                borderRadius: "999px",
                display: "flex",
                padding: "8px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                background: "rgba(61, 85, 204, 0.10)",
            }}
        >
            <IconWrap icon={icon} />
        </div>
    )
}

export default IconButton