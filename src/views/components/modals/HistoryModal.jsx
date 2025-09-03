import React, { useEffect, useState } from 'react'
import { CloseIcon, PhoneCallOut, PhoneForward, PhoneNormal, PhoneRestrict } from '../../../assets/icon/NewStyleIcon'
import TabItem from '../other/TabItem'
import HistoryCallItem from '../other/HistoryCallItem'
import { getCallsArr } from '../../../ultils/helper'
import IconWrap from '../other/icon'
import LoadingSpinner from '../other/LoadingSpinner'

const HistoryModal = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [callHistory, setCallHistory] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const newData = await getCallsArr()
                console.log("DEBUG:", newData);
                setCallHistory(newData)
            } catch (err) {
                console.error("Error fetching call history:", err)
                setCallHistory([])
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    return (
        <div style={{
            position: 'absolute', top: '100%', right: '0',
            display: "flex",
            width: "320px",
            flexDirection: "column",
            alignItems: "flex-start",
            border: "1px solid var(--border-neutral-neutral-light, #DADCE5)",
            background: "var(--background-neutral-surface, #F5F6FA)",
            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.12)"
        }}>
            <div className="modal-header">
                <div className="heading">
                    <PhoneNormal size={20} />
                    <div className="primary-text">Lịch sử gọi</div>
                </div>
                <div className="action-btn">
                    <CloseIcon size={20} />
                </div>
            </div>
            <div className="modal-content">
                <div style={{
                    display: "flex",
                    alignItems: "flex-start",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    borderBottom: "1px solid var(--border-neutral-neutral-light, #DADCE5)"
                }}>
                    <TabItem choosen={tabIndex === 1} onClick={() => setTabIndex(1)}>
                        <PhoneCallOut size={20} fill={tabIndex === 1 ? '#3D55CC' : undefined} />
                        <p className="small-text bold" style={{ color: tabIndex === 1 ? '#3D55CC' : undefined }}>Gọi ra</p>
                    </TabItem>
                    <TabItem choosen={tabIndex === 0} onClick={() => setTabIndex(0)}>
                        <PhoneForward size={17} fill={tabIndex === 0 ? '#3D55CC' : undefined} />
                        <p className="small-text bold" style={{ color: tabIndex === 0 ? '#3D55CC' : undefined }}>Gọi vào</p>
                    </TabItem>
                </div>
                <div className='tab-content' style={{
                    display: "flex",
                    alignItems: "flex-start",
                    flex: "1 0 0",
                    alignSelf: "stretch",
                    minHeight: "200px",
                    overflowY: 'auto'
                }}>
                    {loading ? (
                        <LoadingSpinner />
                    ) : (
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            flex: "1 0 0",
                            alignSelf: "stretch"
                        }}>
                            {(() => {
                                const filtered = callHistory?.filter(item => item.type === tabIndex) || []
                                return filtered.length > 0 ? (
                                    filtered.map(item => (
                                        <HistoryCallItem data={item} key={item.id} />
                                    ))
                                ) : (
                                    <div style={{ display: 'flex', margin: 'auto', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '24px', alignSelf: 'stretch' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                                            <IconWrap icon={PhoneRestrict} fill={'#5C6073'} additionalStyle={{
                                                borderRadius: '999px',
                                                display: 'flex',
                                                padding: 'var(--space-16px, 16px)',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                backgroundColor: 'rgba(151, 154, 168, 0.10)',
                                                cursor: 'default'
                                            }} />
                                            <p className='primary-text'>Không có lịch sử</p>
                                        </div>
                                    </div>
                                )
                            })()}
                        </div>
                    )}
                </div>
            </div>
        </div >
    )
}

export default HistoryModal
