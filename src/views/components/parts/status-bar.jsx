import React, { useState } from 'react'
import SmallModal from '../modals/SmallModal'
import BadgeWrapper from '../other/badge'
import { togglePermission } from '../../../ultils/changeStatus/changeStatus'
import BasicSwitch from '../button/switch'
import IconBtnMultiStages from '../button/iconButtonMultiStage'
import { PhoneCalling, PhoneNormal, PhoneRestrict, } from '../../../assets/icon/PhoneIcons'
import { Active, Disable } from '../../../assets/icon/ActiveStatusIcon'
import { useCall } from '../../../hooks/CallHook/useCall'
import IconButton from '../button/IconButton'

const StatusBar = ({ }) => {
    const { permission, online, setPermission, callStatus, setOnline } = useCall();

    return (
        <SmallModal>
            <BasicSwitch switchStatus={permission} switchText={'Quyền gọi'}
                onClick={() => csEnableCall()} />
            <div className="online-status modal-item" onClick={() => setOnline(!online)}>
                <BadgeWrapper>
                    {online ? <Active /> : <Disable />}
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
                        color: online ? '#393D4D' : '#979AA8',
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
            {!permission ?
                <IconButton icon={PhoneRestrict} style={{ borderRadius: '0', backgroundColor: "auto", }} /> :
                callStatus === 'initial' ?
                    < IconButton icon={PhoneNormal} style={{ borderRadius: '0', backgroundColor: "auto", }} /> :
                    callStatus === 'calling' ?
                        <IconButton icon={PhoneCalling} style={{ borderRadius: '0', backgroundColor: "auto", }} /> : ''
            }
        </SmallModal >
    )
}

export default StatusBar