import { useEffect, useState } from 'react'
import CallingModal from '../../components/modals/CallingModal'
import CSCallModal from '../../components/modals/csCallModal'
import TransferingAcceptionModal from '../../components/modals/TransferingAcceptionModal'
import StatusBar from '../../components/parts/status-bar'
import { useCall } from '../../hooks/CallHook/useCall'

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
        </div>
    )
}

export default MainView