import React from 'react'
import './LeftSideBar.css'

const NavItem = ({ Icon, children, isExpanded = true, style, onClick }) => {
    return (
        <div className='nav-item' style={{ ...style }}>
            <button className='nav-item-btn' onClick={onClick}>
                <Icon size={24} />
            </button>
            {isExpanded && children}
        </div>
    )
}

export default NavItem