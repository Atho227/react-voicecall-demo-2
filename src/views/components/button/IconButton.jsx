import React from 'react'
import IconWrap from '../other/icon'

const IconButton = ({ icon, onClick, style, iconStyle, fill, size }) => {
    return (
        <div
            onClick={() => onClick()}
            style={{
                borderRadius: "999px",
                display: "flex",
                padding: "8px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "rgba(61, 85, 204, 0.10)",
                ...style
            }}
        >
            <IconWrap icon={icon} additionalStyle={{ ...iconStyle }} fill={fill} size={size} />
        </div>
    )
}

export default IconButton