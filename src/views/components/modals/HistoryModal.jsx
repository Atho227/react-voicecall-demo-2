import React, { useState } from 'react'
import { CloseIcon, PhoneCallOut, PhoneForward, PhoneNormal } from '../../../assets/icon/NewStyleIcon'
import TabItem from '../other/TabItem'
import HistoryCallItem from '../other/HistoryCallItem'

const HistoryModal = () => {
    const [tabIndex, setTabIndex] = useState(1)
    const [callHistory, setCallHistory] = useState(call)
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
                        <HistoryCallItem data={callHistory[0]} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default HistoryModal

const call = [
    {
        "id": 134833,
        "customer_id": 63222025,
        "call_id": "20250901155817-VYVHFBXO-373",
        "caller": "0349412466",
        "called": "1068",
        "user_id": "1",
        "agent_id": "5000",
        "group_id": 1,
        "call_type": 0,
        "start_time": "2025-09-01 15:58:23",
        "call_status": "miss",
        "end_time": "2025-09-01 15:58:44",
        "wait_time": "00:00:00",
        "hold_time": "00:00:00",
        "talk_time": "00:00:00",
        "end_status": "system",
        "ticket_id": 415009640,
        "last_agent_id": "5000",
        "dtmf": null,
        "last_user_id": "1",
        "call_survey": "NO",
        "call_survey_result": null,
        "service_id": 1005023,
        "missed_reason": "missed_agent_device"
    },
    {
        "id": 134831,
        "customer_id": 63150884,
        "call_id": "20250831215005-VYVHFBXO-372",
        "path": "https://test.caresoft.vn:19991/f/b6a0d15a9cf87c6cef402e5131f24f6b//68b461387569dc13de01eca5/6b0e12c9b3304d8e7878e9f4e1745194/764a7ec3942b53f9d8001b08e7457386.mp3",
        "path_download": "https://test.caresoft.vn:19991/f/b6a0d15a9cf87c6cef402e5131f24f6b//68b461387569dc13de01eca5/cd0490cefca753018d9f55bf9fff4739/764a7ec3942b53f9d8001b08e7457386.mp3",
        "caller": "0853356194",
        "called": "1068",
        "user_id": "1",
        "agent_id": "5000",
        "group_id": 1,
        "call_type": 0,
        "start_time": "2025-08-31 21:50:11",
        "call_status": "meetAgent",
        "end_time": "2025-08-31 21:50:22",
        "wait_time": "00:00:01",
        "hold_time": "00:00:00",
        "talk_time": "00:00:10",
        "end_status": "system",
        "ticket_id": 415009638,
        "last_agent_id": "5000",
        "dtmf": null,
        "last_user_id": "1",
        "call_survey": "NO",
        "call_survey_result": null,
        "service_id": 1005023,
        "missed_reason": "missed_agent_timeout"
    },
    {
        "id": 134829,
        "customer_id": 63150884,
        "call_id": "20250831214859-VYVHFBXO-371",
        "path": "https://test.caresoft.vn:19991/f/b6a0d15a9cf87c6cef402e5131f24f6b//68b460f67569dc13de01eca3/6b0e12c9b3304d8e7878e9f4e1745194/683bb2cd5ca339357aa3f188678a51d9.mp3",
        "path_download": "https://test.caresoft.vn:19991/f/b6a0d15a9cf87c6cef402e5131f24f6b//68b460f67569dc13de01eca3/cd0490cefca753018d9f55bf9fff4739/683bb2cd5ca339357aa3f188678a51d9.mp3",
        "caller": "0853356194",
        "called": "1068",
        "user_id": "1",
        "agent_id": "5000",
        "group_id": 1,
        "call_type": 0,
        "start_time": "2025-08-31 21:49:04",
        "call_status": "meetAgent",
        "end_time": "2025-08-31 21:49:15",
        "wait_time": "00:00:02",
        "hold_time": "00:00:00",
        "talk_time": "00:00:09",
        "end_status": "system",
        "ticket_id": 415009637,
        "last_agent_id": "5000",
        "dtmf": null,
        "last_user_id": "1",
        "call_survey": "NO",
        "call_survey_result": null,
        "service_id": 1005023,
        "missed_reason": "missed_agent_timeout"
    },
    {
        "id": 134827,
        "customer_id": 63150884,
        "call_id": "20250831214734-VYVHFBXO-370",
        "path": "https://test.caresoft.vn:19991/f/b6a0d15a9cf87c6cef402e5131f24f6b//68b460a97569dc13de01eca1/6b0e12c9b3304d8e7878e9f4e1745194/cad31853467ed0d87ad2779d93dba635.mp3",
        "path_download": "https://test.caresoft.vn:19991/f/b6a0d15a9cf87c6cef402e5131f24f6b//68b460a97569dc13de01eca1/cd0490cefca753018d9f55bf9fff4739/cad31853467ed0d87ad2779d93dba635.mp3",
        "caller": "0853356194",
        "called": "1068",
        "user_id": "1",
        "agent_id": "5000",
        "group_id": 1,
        "call_type": 0,
        "start_time": "2025-08-31 21:47:39",
        "call_status": "meetAgent",
        "end_time": "2025-08-31 21:47:59",
        "wait_time": "00:00:02",
        "hold_time": "00:00:00",
        "talk_time": "00:00:18",
        "end_status": "cus",
        "ticket_id": 415009636,
        "last_agent_id": "5000",
        "dtmf": null,
        "last_user_id": "1",
        "call_survey": "NO",
        "call_survey_result": null,
        "service_id": 1005023,
        "missed_reason": "missed_customer"
    },
    {
        "id": 134825,
        "customer_id": 63150884,
        "call_id": "20250831214526-VYVHFBXO-369",
        "path": "https://test.caresoft.vn:19991/f/b6a0d15a9cf87c6cef402e5131f24f6b//68b460277569dc13de01ec9f/6b0e12c9b3304d8e7878e9f4e1745194/08abd2f599958b54d15851cf3b2f4d7d.mp3",
        "path_download": "https://test.caresoft.vn:19991/f/b6a0d15a9cf87c6cef402e5131f24f6b//68b460277569dc13de01ec9f/cd0490cefca753018d9f55bf9fff4739/08abd2f599958b54d15851cf3b2f4d7d.mp3",
        "caller": "0853356194",
        "called": "1068",
        "user_id": "1",
        "agent_id": "5000",
        "group_id": 1,
        "call_type": 0,
        "start_time": "2025-08-31 21:45:32",
        "call_status": "meetAgent",
        "end_time": "2025-08-31 21:45:49",
        "wait_time": "00:00:02",
        "hold_time": "00:00:00",
        "talk_time": "00:00:15",
        "end_status": "system",
        "ticket_id": 415009635,
        "last_agent_id": "5000",
        "dtmf": null,
        "last_user_id": "1",
        "call_survey": "NO",
        "call_survey_result": null,
        "service_id": 1005023,
        "missed_reason": "missed_agent_timeout"
    },
    {
        "id": 134822,
        "customer_id": 63150884,
        "call_id": "20250831214310-VYVHFBXO-368",
        "caller": "0853356194",
        "called": "1068",
        "user_id": "1",
        "agent_id": "5000",
        "group_id": 1,
        "call_type": 0,
        "start_time": "2025-08-31 21:43:10",
        "call_status": "miss",
        "end_time": "2025-08-31 21:43:21",
        "wait_time": "00:00:04",
        "hold_time": "00:00:00",
        "talk_time": "00:00:00",
        "end_status": "system",
        "ticket_id": 415009634,
        "last_agent_id": "5000",
        "dtmf": null,
        "last_user_id": "1",
        "call_survey": "NO",
        "call_survey_result": null,
        "service_id": 1005023,
        "missed_reason": "missed_agent_device"
    },
]