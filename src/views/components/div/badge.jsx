import React from 'react'

const BadgeWrapper = ({ children }) => {
    return (
        <div style={{
            display: 'flex',
            width: '20px',
            height: '20px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            flexShrink: '0'
        }}> {children}</div >
    )
}

export default BadgeWrapper