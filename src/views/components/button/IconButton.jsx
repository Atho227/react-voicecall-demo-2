import React from 'react'

const IconButton = ({ Icon, size = 24, fill = "#3D55CC", style = {}, ...props }) => {
    return (
        <button
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "8px",
                borderRadius: "999px",
                border: "none",
                cursor: "pointer",
                ...style
            }}
            {...props}
        >
            <Icon size={size} fill={fill} />
        </button>
    )
}


export default IconButton