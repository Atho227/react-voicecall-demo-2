import React, { useState } from 'react'
import IconButton from '../components/button/IconButton'
import { ClockClockwise } from '../../assets/icon/NewStyleIcon'

const CallHistory = () => {
    const [showHistoryModal, setShowHistoryModal] = useState(false)
    return (
        <div style={{ position: 'absolute', top: '48px', right: '48px' }}>
            <IconButton Icon={ClockClockwise} />

        </div>
    )
}

export default CallHistory