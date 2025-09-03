import React from 'react'

const TabItem = ({ choosen = false, children, ...props }) => {
    return (
        <div style={{
            display: "flex",
            padding: "var(--space-8px, 8px) var(--space-12px, 12px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--space-inline-8px, 8px)",
            flex: "1 0 0",
            alignSelf: "stretch",
            cursor: 'pointer',
            borderBottom: "2px solid",
            borderBottomColor: choosen ? "#3D55CC" : "transparent",
            color: choosen ? "#3D55CC" : "inherit",
        }}
            {...props}>
            {children}
        </div>
    )
}

export default TabItem
