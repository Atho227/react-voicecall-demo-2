import React, { useState } from 'react'
import SmallModal from '../modals/SmallModal'
import BadgeWrapper from '../other/badge'
import BasicSwitch from '../button/switch'
import { Active, Disable } from '../../../assets/icon/ActiveStatusIcon'
import { useCall } from '../../../hooks/CallHook/useCall'
import IconButton from '../button/IconButton'
import { PhoneCalling, PhoneNormal, PhoneRestrict } from '../../../assets/icon/NewStyleIcon'

const StatusBar = ({ }) => {
    const { permission, online, setOnline, isCall } = useCall();
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
                <IconButton Icon={PhoneRestrict} fill='#FF451C' size={19} style={{ borderRadius: '0' }} />
                : isCall ?
                    < IconButton Icon={PhoneCalling} fill='#4BCC2E' size={19} style={{ borderRadius: '0' }} />
                    :
                    < IconButton Icon={PhoneNormal} fill='#3D55CC' size={19} style={{ borderRadius: '0' }} />
            }
        </SmallModal >
    )
}

export default StatusBar