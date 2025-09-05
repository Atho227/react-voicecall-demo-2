import React from 'react'
import IconWrap from './icon'
import { UserIcon } from '../../../assets/icon/ActiveStatusIcon'

const ListItem = ({ data, onClick, ...props }) => {
    const handleClick = () => {
        if (onClick) onClick(data)
    }
    return (
        <div
            className='hover'
            style={{
                display: "flex",
                height: "56px",
                padding: "8px",
                alignItems: "center",
                gap: "16px",
                alignSelf: "stretch",
                borderRadius: '12px'
            }}
            onClick={handleClick}
            {...props}
        >
            <div style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-12px, 12px)",
                flex: "1 0 0",
            }}>
                <div style={{
                    display: "flex",
                    width: "40px",
                    height: "40px",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <div style={{
                        width: '40px',
                        height: '40px',
                        flexShrink: '0',
                        borderRadius: '99px',
                        backgroundColor: '#DADCE5',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <IconWrap icon={UserIcon} />
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    flex: "1 0 0",
                    borderRadius: '12px',
                }}>
                    <p className='secondary-text bold'>{data?.username || 'User Name'}</p>
                    <div style={{
                        display: "flex",
                        minHeight: "16px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "var(--space-4px, 4px)",
                    }}>
                        <p className='tiny-text'>{data?.email || 'email123@gmail.com'}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListItem
