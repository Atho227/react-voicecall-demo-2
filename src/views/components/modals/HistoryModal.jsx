import React from 'react'
import { CloseIcon, PhoneNormal } from '../../../assets/icon/NewStyleIcon'
import IconButton from '../button/IconButton'

const HistoryModal = () => {
    return (
        <div style={{
            position: 'absolute', top: '100%', right: '0',
            display: "flex",
            width: "320px",
            flexDirection: "column",
            alignItems: "flex-start",
            // borderRadius: '12px',
            border: "1px solid var(--border-neutral-neutral-light, #DADCE5)",
            background: "var(--background-neutral-surface, #F5F6FA)",
            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.12)"
        }}>
            <div className="modal-header">
                <div className="heading">
                    <PhoneNormal size={20} />
                    <div className="primary-text">Lịch sử gọi</div>
                </div>
                <div className="action-btn">
                    <CloseIcon size={20} />
                </div>
            </div>
        </div>
    )
}

export default HistoryModal