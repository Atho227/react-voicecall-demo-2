import React from 'react'
import IconWrap from '../other/icon'

const IconButton = ({ icon, onClick, style, iconStyle }) => {
    return (
        <div
            onClick={onClick}
            style={{
                borderRadius: "999px",
                display: "flex",
                padding: "8px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                background: "rgba(61, 85, 204, 0.10)",
                ...style
            }}
        >
            <IconWrap icon={icon} additionalStyle={{ ...iconStyle }} />
        </div>
    )
}

export default IconButton