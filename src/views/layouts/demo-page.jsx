import React, { useEffect, useState } from 'react'
import StatusBar from '../components/parts/status-bar'
import CSCallModal from '../components/modals/csCallModal'
import CallingModal from '../components/modals/CallingModal'
import { useCall } from '../../hooks/CallHook/useCall'

// const status = {
//     'permission': false,
//     'online': true,
//     'calling': false,
//     'recivingCall': false,
//     'callModal': true,
// }

const MainLayout = ({ }) => {
    // const [status, setStatus] = useState(statusStat)
    const { startCall, CallEnded } = useCall();

    const [showCallingModal, setShowCallingModal] = useState(false)
    const [showNumdial, setShowNumdial] = useState(true)
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 'auto', gap: '8px', backgroundColor: 'white', color: 'black', position: 'absolute', top: '50px', left: '50%', transform: 'translatex(-50%)' }}>
            <StatusBar />
            {showNumdial ? <CSCallModal /> : ''}
            {showCallingModal ? <CallingModal /> : ''}
        </div>
    )
}

export default MainLayout