import React, { useState } from 'react';
import { createPortal } from 'react-dom';

const DetailCallModal = ({ isOpen, onClose, call_id }) => {
    if (!isOpen) return null;
    const [isLoading, setIsloading] = useState(true)
    const [data, setData] = useState(null)


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
                Hello
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
