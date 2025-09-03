import React, { useState } from 'react'
import IconButton from '../components/button/IconButton'

const CallHistory = () => {
    const [showHistoryModal, setShowHistoryModal] = useState(false)
    return (
        <div style={{ position: 'absolute', top: '48px', right: '48px' }}>
            <IconButton />
        </div>
    )
}

export default CallHistory