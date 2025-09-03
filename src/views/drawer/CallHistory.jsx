import React, { useEffect, useState } from 'react'
import IconButton from '../components/button/IconButton'
import { ClockClockwise } from '../../assets/icon/NewStyleIcon'
import HistoryModal from '../components/modals/HistoryModal'
import { getCallsArr } from '../../ultils/helper'

const CallHistory = () => {
    const [showHistoryModal, setShowHistoryModal] = useState(false)

    const [callHistory, setCallHistory] = useState(null)
    const [lastFetchTime, setLastFetchTime] = useState(null)
    const [isModalLoadind, setIsModalLoading] = useState(true)

    const fetchData = async () => {
        const needFetch =
            !callHistory ||
            !lastFetchTime ||
            Date.now() - lastFetchTime > 5 * 60 * 1000

        if (!needFetch) return

        setIsModalLoading(true)
        try {
            const newData = await getCallsArr()
            const newTime = Date.now()
            setCallHistory(newData)
            setLastFetchTime(newTime)
        } catch (err) {
            console.error("Error fetching call history:", err)
            setCallHistory([])
        } finally {
            setIsModalLoading(false)
        }
    }

    const onOpenModal = () => {
        setShowHistoryModal(!showHistoryModal)
        fetchData()
    }
    return (
        <div style={{ position: 'absolute', top: '48px', right: '48px' }}>
            <IconButton Icon={ClockClockwise} onClick={onOpenModal} />
            {showHistoryModal && <HistoryModal data={callHistory} isLoading={isModalLoadind} setOpen={setShowHistoryModal} />}
        </div>
    )
}

export default CallHistory