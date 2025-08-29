import React from 'react'

const TransferingAcceptionModal = ({ setOpen }) => {
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className='modal'
            style={{ position: "fixed", backgroundColor: "rgba(0,0,0,0.3)", width: '100%', height: '100%', top: '0', left: '0', display: 'flex', justifyContent: 'center', alignItems: 'center   ' }}
            onClick={handleClose}>
            TransferingAcceptionModal
        </div>
    )
}

export default TransferingAcceptionModal