import React, { useState } from 'react'
import IconButton from '../components/button/IconButton'
import { ClockClockwise } from '../../assets/icon/NewStyleIcon'
import HistoryModal from '../components/modals/HistoryModal'

const CallHistory = () => {
    const [showHistoryModal, setShowHistoryModal] = useState(false)

    const [loading, setLoading] = useState(true)
    const [tabIndex, setTabIndex] = useState(1)
    const [callHistory, setCallHistory] = useState(null)
    const [lastFetchTime, setLastFetchTime] = useState(null)

    const fetchData = async () => {
        setLoading(true)
        try {
            const newData = await getCallsArr()
            const newTime = Date.now()
            setCallHistory(newData)
            setLastFetchTime(newTime)
        } catch (err) {
            console.error("Error fetching call history:", err)
            setCallHistory([])
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        const needFetch =
            !callHistory ||
            !lastFetchTime ||
            Date.now() - lastFetchTime > 5 * 60 * 1000

        if (needFetch) {
            console.log("DEBUG:", needFetch)
            fetchData()
        }
    }, [lastFetchTime, callHistory])

    return (
        <div style={{ position: 'absolute', top: '48px', right: '48px' }}>
            <IconButton Icon={ClockClockwise} onClick={() => setShowHistoryModal(!showHistoryModal)} />
            {showHistoryModal && <HistoryModal />}
        </div>
    )
}

export default CallHistory