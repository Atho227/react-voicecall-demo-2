import React, { useEffect, useState } from 'react'
import StatusBar from '../components/parts/status-bar'
import CSCallModal from '../components/modals/csCallModal'
import CallingModal from '../components/modals/CallingModal'
import { useCall } from '../../hooks/CallHook/useCall'
import TransferingAcceptionModal from '../components/modals/TransferingAcceptionModal'

const MainLayout = ({ }) => {
    const { isReciveTransfer } = useCall();

    const [showCallingModal, setShowCallingModal] = useState(false)
    const [showNumdial, setShowNumdial] = useState(true)
    const [showTransferModal, setShowTransferModal] = useState(false)


    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 'auto', gap: '8px', backgroundColor: 'white', color: 'black', position: 'absolute', top: '50px', left: '40%' }}>
            <StatusBar />
            {showNumdial ? <CSCallModal /> : ''}
            {showCallingModal ? <CallingModal /> : ''}
            {showTransferModal && <TransferingAcceptionModal />}
        </div>
    )
}

export default MainLayout