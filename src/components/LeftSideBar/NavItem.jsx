import React from 'react'
import './LeftSideBar.css'

const NavItem = ({ Icon, text, isExpanded = true, style, onClick }) => {
    return (
        <div className='nav-item' style={{ ...style }}>
            <button className='nav-item-btn' onClick={onClick}>
                <Icon size={24} />
            </button>
            {isExpanded &&
                <p
                    style={{
                        flex: 1,
                        textAlign: "start",
                        textWrap: 'nowrap',
                        textOverflow: 'ellipsis',
                        opacity: isExpanded ? 1 : 0,
                        width: isExpanded ? 'auto' : 0,
                        overflow: 'hidden',
                    }}
                    className='primary-text bold'>
                    {text}
                </p>
            }
        </div>
    )
}

export default NavItem