import React from 'react'
import { CloseIcon } from '../../../assets/icon/NewStyleIcon';
import NormalButton from '../button/NormalButton';

const TransferingAcceptionModal = ({ setOpen }) => {
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className='modal'
            style={{ position: "fixed", backgroundColor: "rgba(0,0,0,0.3)", width: '100%', height: '100%', top: '0', left: '0', display: 'flex', justifyContent: 'center', alignItems: 'center   ' }}
            onClick={handleClose}>
            <div
                style={{
                    display: "flex",
                    width: "400px",
                    padding: "0 24px 24px 24px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: "16px",
                    borderRadius: "12px",
                    border: "1px solid var(--border-neutral-neutral-light, #DADCE5)",
                    background: "#FFF",
                    boxShadow: "0 3px 12px 0 rgba(0, 0, 0, 0.10)",
                }}
                onClick={(e) => { e.stopPropagation() }} >
                <div style={{
                    display: "flex",
                    padding: "12px 0",
                    justifyContent: "space-between",
                    alignItems: "center",
                    alignSelf: "stretch",
                    borderBottom: "1px solid var(--modal-divider, #DADCE5)",
                }}>
                    <p className='primary-text bold'>Yêu cầu chuyển cuộc gọi</p>
                    <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={handleClose}>
                        <CloseIcon size={20} />
                    </div>
                </div>
                <div className="m-content">
                    <p className='primary-text' style={{ fontWeight: '400' }}>Bạn nhận được yêu cầu chuyển cuộc gọi từ: <br />Hello</p>
                </div>
                <div className="m-btn-group" style={{ display: "flex", gap: "8px", alignSelf: "stretch" }}>
                    <NormalButton text='Chấp nhận' style={{ backgroundColor: '#3D55CC', color: '#D9E1FC' }}
                        onClick={() => { responseTransferAgent(1) }} />
                    <NormalButton text='Từ chối' onClick={() => {
                        responseTransferAgent(0)
                        handleClose()
                    }} />
                </div>
            </div>
        </div>
    )
}

export default TransferingAcceptionModal