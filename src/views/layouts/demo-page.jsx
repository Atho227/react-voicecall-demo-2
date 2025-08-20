import React, { useEffect, useState } from 'react'
import StatusBar from '../components/parts/status-bar'
import CSCallModal from '../components/modals/csCallModal'

const status = {
    'permission': false,
    'online': true,
    'calling': false,
    'recivingCall': false,
    'callModal': false,
}

const MainLayout = ({ statusStat = status }) => {
    const [status, setStatus] = useState(statusStat)

    useEffect(() => {
        console.log('Status changed:', status);
    }, [status]);

    return (
        <div style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 'auto', gap: '8px', backgroundColor: 'white', color: 'black' }}>
            <StatusBar status={status} setStatus={setStatus} />
            {status.callModal ? <CSCallModal /> : ''}
        </div>
    )
}

export default MainLayout