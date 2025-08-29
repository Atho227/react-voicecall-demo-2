import React from 'react'
import IconWrap from '../other/icon';
import { CloseIcon } from '../../../assets/icon/NewStyleIcon';

const SearchAgentModal = ({ setOpen }) => {

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
                    width: "540px",
                    padding: "0 var(--space-inset-24px, 24px) var(--space-24px, 24px) var(--space-inset-24px, 24px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: "16px",
                    borderRadius: "var(--radius-medium,12px)", // hoặc nếu có token CSS khác thì thay vào
                    border: "1px solid var(--border-neutral-neutral-light, #DADCE5)",
                    background: "var(--background-neutral-container, #FFF)",
                    boxShadow: "0 3px 12px 0 rgba(0, 0, 0, 0.10)",
                }}
                onClick={(e) => { e.stopPropagation() }} >
                <div style={{
                    display: "flex",
                    padding: "var(--space-inset-12px, 12px) 0",
                    justifyContent: "space-between",
                    alignItems: "center",
                    alignSelf: "stretch",
                    borderBottom: "1px solid var(--modal-divider, #DADCE5)",
                }}>
                    <div style={{
                        display: "flex",
                        width: "364px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                    }}>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "var(--space-4px, 4px)",
                            alignSelf: "stretch",
                        }}>
                            <p className='primary-text bold'>Chọn Agent để chuyển tiếp</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <CloseIcon />
                    </div>
                </div>
                <div className="m-content"></div>
                <div className="m-btn-group"></div>
            </div>
        </div>
    )
}

export default SearchAgentModal