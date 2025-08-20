import React, { useState } from 'react'
import SmallModal from '../modals/SmallModal'
import BadgeWrapper from '../div/badge'
import { toggleOnlineStatus } from '../../../ultils/changeStatus/changeStatus'
import BasicSwitch from '../button/switch'
import IconBtnMultiStages from '../button/iconButtonMultiStage'
import { PhoneCalling, PhoneNormal, PhoneRestrict, } from '../../../assets/icon/PhoneIcons'
import { Active, Disable } from '../../../assets/icon/ActiveStatusIcon'

const StatusBar = ({ status, setStatus }) => {
    const [callOutStage, setCallOutStage] = useState(2)

    const callOutIcons = {
        1: PhoneRestrict,
        2: PhoneNormal,
        3: PhoneCalling,
    }

    const toggleCallOutIcon = () => {
        setCallOutStage(prevStage => {
            const maxStage = Object.keys(callOutIcons).length;
            return prevStage >= maxStage ? 1 : prevStage + 1;
        });
    };

    const openCSCallModal = () => {
        if (status.callModal !== true) {
            setStatus(prevStatus => ({
                ...prevStatus,
                callModal: true
            }));
        }
    };

    return (
        <SmallModal>
            <BasicSwitch switchStatus={status.permission} switchText={'Quyền gọi'} />
            <div className="online-status modal-item" onClick={() => toggleOnlineStatus(setStatus)}>
                <BadgeWrapper>
                    {status.online ? <Active /> : <Disable />}
                </BadgeWrapper>
                <div
                    className="online-status-text"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                    }}
                >
                    <span className="texxt" style={{
                        color: status.online ? '#393D4D' : '#979AA8',
                        fontVariantNumeric: "lining-nums tabular-nums",
                        fontFeatureSettings: "'cpsp' on, 'calt' off",
                        fontFamily: "var(--typeface-family-text, Inter)",
                        fontSize: "var(--typeface-size-body-s, 14px)",
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "var(--typeface-line-height-body-s, 20px)",
                    }}>Trực tuyến</span>
                </div>
            </div >
            <IconBtnMultiStages stage={callOutStage} icons={callOutIcons} onClick={openCSCallModal} />
        </SmallModal >
    )
}

export default StatusBar