import React from 'react'

const SmallModal = ({ children }) => {
    return (
        <div
            className='status-modal'
            style={{
                display: "inline-flex",
                maxHeight: "36px",
                padding: "var(--space-8px, 8px) 10px",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "var(--space-12px, 12px)",
                borderRadius: "var(--radius-medium, 8px)",
                border: "1px solid var(--border-neutral-neutral, #979AA8)",
                background: "var(--background-neutral-hover, rgba(151, 154, 168, 0.05))",
                boxSizing: 'content-box '
            }}
        >
            {children}
        </div >
    )
}

export default SmallModal