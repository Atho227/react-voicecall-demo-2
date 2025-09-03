import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon, PhoneNormal } from '../../../assets/icon/NewStyleIcon';
import IconButton from '../button/IconButton';
import AudioPlay from '../other/AudioPlay';

const DetailCallModal = ({ isOpen, onClose, data }) => {
    if (!isOpen) return null;
    const [isLoading, setIsloading] = useState(true)
    // const [data, setData] = useState(null)
    return createPortal(
        <div style={overlayStyle}>
            <div style={{
                display: "flex",
                width: "460px",
                flexDirection: "column",
                alignItems: "flex-start",
                border: "1px solid var(--border-neutral-neutral-light, #DADCE5)",
                background: "var(--background-neutral-surface, #F5F6FA)",
                boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.12)"
            }}>
                <div className="modal-header" style={{
                    borderBottom: '1px solid var(--border-neutral-neutral-light, #DADCE5)'
                }}>
                    <div className="heading">
                        <PhoneNormal size={20} />
                        <p className="primary-text">Thông tin cuộc gọi <br />{data.call_id}</p>
                    </div>
                    <div className="action-btn">
                        <IconButton Icon={CloseIcon} size={20} onClick={onClose} fill='black' />
                    </div>
                </div>
                <div className="modal-content">
                    <div style={{
                        display: 'flex',
                        padding: 'var(--space-16px, 16px) 16px',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: 'var(--space-16px, 16px)',
                        alignSelf: 'stretch',
                        borderBottom: '1px solid var(--border-neutral-neutral-light, #DADCE5)'
                    }}>
                        <div className='call_detail_section'>
                            <p className='primary-text bold' style={{ width: '100%' }}>Thông tin chung</p>
                            <p className='primary-text bold'>Call ID: <span className='primary-text'>{data.call_id}</span></p>
                            <p className='primary-text bold' style={{ width: 'calc(50% - 4px)' }}>Người gọi: <span className='primary-text'>{data.caller}</span></p>
                            <p className='primary-text bold' style={{ width: 'calc(50% - 4px)' }}>Người nghe: <span className='primary-text'>{data.called}</span></p>
                            <p className='primary-text bold' style={{ width: 'calc(50% - 4px)' }}>IPPhone: <span className='primary-text'>{data.agent_id}</span></p>
                            <p className='primary-text bold' style={{ width: 'calc(50% - 4px)' }}>Bộ phận: <span className='primary-text'>{data.group_id}</span></p>
                            <p className='primary-text bold'>Ticket ID: <span className='primary-text'>{data.ticket_id}</span></p>
                        </div>
                    </div>
                    <div style={{
                        display: 'flex',
                        padding: 'var(--space-16px, 16px) 16px',
                        flexDirection: 'column',
                        // alignItems: 'flex-start',
                        gap: 'var(--space-16px, 16px)',
                        alignSelf: 'stretch',
                    }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{
                                display: "flex",
                                // padding: "0 var(--space-16px, 16px)",
                                alignItems: "center",
                                gap: "8px",
                                alignSelf: "stretch"
                            }}>
                                <p className='primary-text bold' >Ghi âm cuộc gọi</p>
                            </div>
                            <div style={{
                                display: "flex",
                                padding: "var(--space-8px, 8px) var(--space-16px, 16px)",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: "var(--space-8px, 8px)",
                                alignSelf: "stretch",
                                width: '100%',
                            }}>
                                <AudioPlay audioURL={data.path} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById('modal-root')
    );
};

const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
};

export default DetailCallModal;
