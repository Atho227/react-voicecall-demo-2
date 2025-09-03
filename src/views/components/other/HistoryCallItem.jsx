import React from 'react'
import NormalButton from '../button/NormalButton'
import { PhoneCallOut } from '../../../assets/icon/NewStyleIcon'

const HistoryCallItem = ({ data, onClick, ...props }) => {
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
                    <PhoneCallOut />
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    flex: "1 0 0",
                    borderRadius: '12px',
                }}>
                    <p className='secondary-text bold'>{`Dịch vụ ${data?.service}` || 'User Name'}</p>
                    <div style={{
                        display: "flex",
                        minHeight: "16px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "var(--space-4px, 4px)",
                    }}>
                        <p className='secondary-text'>{`Khách ${data?.customer}` || 'email123@gmail.com'}</p>
                    </div>
                </div>
                <NormalButton text='Chi tiết' onClick={handleClick} style={{ alignSelf: 'auto' }} />
            </div>
        </div>
    )
}


export default HistoryCallItem