import React, { useEffect, useState } from 'react'
import StatusBar from '../../components/parts/status-bar'
import CSCallModal from '../../components/modals/csCallModal'
import CallingModal from '../../components/modals/CallingModal'
import { useCall } from '../../hooks/CallHook/useCall'
import TransferingAcceptionModal from '../../components/modals/TransferingAcceptionModal'
import Controller from "../../components/other/controller.jsx";

const MainView = ({ }) => {
    const { isReciveTransfer } = useCall();

    const [showCallingModal, setShowCallingModal] = useState(false)
    const [showNumdial, setShowNumdial] = useState(true)
    const [showTransferModal, setShowTransferModal] = useState(false)

    useEffect(() => {
        if (isReciveTransfer) setShowTransferModal(isReciveTransfer)
    }, [isReciveTransfer])

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 'auto', marginTop: '48px', gap: '8px', backgroundColor: 'white', color: 'black' }}>
            <StatusBar />
            {showNumdial ? <CSCallModal /> : ''}
            {showCallingModal ? <CallingModal /> : ''}
            {showTransferModal && <TransferingAcceptionModal setOpen={setShowTransferModal} />}
            {/* <Controller /> */}
        </div>
    )
}

export default MainView