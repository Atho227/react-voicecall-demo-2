import React, { useEffect, useState } from 'react'
import StatusBar from '../components/parts/status-bar'
import CSCallModal from '../components/modals/csCallModal'
import CallingModal from '../components/modals/CallingModal'

const status = {
    'permission': false,
    'online': true,
    'calling': false,
    'recivingCall': false,
    'callModal': true,
}

const MainLayout = ({ statusStat = status }) => {
    const [status, setStatus] = useState(statusStat)
    useEffect(() => {
        console.log('Status changed:', status);
    }, [status]);

    const [showCallingModal, setShowCallingModal] = useState(false)
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 'auto', gap: '8px', backgroundColor: 'white', color: 'black', position: 'absolute', top: '50px', left: '50%', transform: 'translatex(-50%)' }}>
            <StatusBar status={status} setStatus={setStatus} />
            {status.callModal ? <CSCallModal /> : ''}
            {showCallingModal ? <CallingModal /> : ''}
        </div>
    )
}

export default MainLayout