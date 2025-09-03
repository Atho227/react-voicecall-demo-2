import React, { useState } from 'react'
import { InfoIcon, PhoneCallOut } from '../../../assets/icon/NewStyleIcon'
import DetailCallModal from '../modals/DetailCallModal'

const HistoryCallItem = ({ data, onClick, ...props }) => {
    const [showModal, setShowModal] = useState(false)
    const handleClick = () => {
        // if (onClick) onClick(data)
        setShowModal(!showModal)
    }
    return (
        <div
            style={{
                display: "flex",
                height: "64px",
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
                    position: 'relative'
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
                    <p className='secondary-text bold' style={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        maxWidth: '145px'
                    }}>{`${data?.service}` || 'User Name'}</p>
                    <div style={{
                        display: "flex",
                        minHeight: "16px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "var(--space-4px, 4px)",
                    }}>
                        <p className='secondary-text' style={{ textOverflow: 'ellipsis' }}>{`${data?.customer}` || 'email123@gmail.com'}</p>
                    </div>
                </div>
                <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px'
                }}>
                    <p className='tiny-text' style={{}}>{data.end_time}</p>
                    <InfoIcon onClick={handleClick} fill='#3D55CC' style={{ cursor: 'pointer' }} />
                </div>
            </div>
            {showModal && <DetailCallModal isOpen={showModal} onClose={() => setShowModal(false)} data={data} />}
        </div>
    )
}


export default HistoryCallItem