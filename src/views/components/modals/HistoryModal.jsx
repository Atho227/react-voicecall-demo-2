import React, { useState } from 'react'
import { CloseIcon, PhoneCallOut, PhoneForward, PhoneNormal } from '../../../assets/icon/NewStyleIcon'
import TabItem from '../other/TabItem'

const HistoryModal = () => {
    const [tabIndex, setTabIndex] = useState(1)

    return (
        <div style={{
            position: 'absolute', top: '100%', right: '0',
            display: "flex",
            width: "320px",
            flexDirection: "column",
            alignItems: "flex-start",
            // borderRadius: '12px',
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
                    <TabItem choosen={tabIndex === 2} onClick={() => setTabIndex(2)}>
                        <PhoneForward size={17} fill={tabIndex === 2 ? '#3D55CC' : undefined} />
                        <p className="small-text bold" style={{ color: tabIndex === 2 ? '#3D55CC' : undefined }}>Gọi vào</p>
                    </TabItem>
                </div>
                <div style={{
                    display: "flex",
                    alignItems: "flex-start",
                    flex: "1 0 0",
                    alignSelf: "stretch"
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        flex: "1 0 0",
                        alignSelf: "stretch"
                    }}>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default HistoryModal