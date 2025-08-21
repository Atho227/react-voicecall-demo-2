import React, { useState } from 'react'
import IconWrap from '../other/icon'
import { NumberDial, PhoneNormalFill, PhoneRestrict } from '../../../assets/icon/PhoneIcons'
import { Active } from '../../../assets/icon/ActiveStatusIcon'
import { CloseIcon, HeadSet } from '../../../assets/icon/ActionIcons'
import IconOptionBtn from '../button/iconOptionBtn'
import BasicSwitch from '../button/switch'
import DropDown from '../button/Dropdown'
import PhoneBtnLine from '../other/phoneBtnLine'

const CSCallModal = () => {
    const [showNumpad, setShowNumPad] = useState(true)
    const [ringging, setRingging] = useState(true)
    const [callDirection, setCalldireaction] = useState(true)

    const toggleNumPad = () => {
        setShowNumPad(!showNumpad)
    }
    return (
        <div className='CS-Call'>
            <div className="modal-header">
                <div className="heading">
                    <IconWrap icon={PhoneNormalFill} />
                    <div className="primary-text">CS Call</div>
                    <Active />
                </div>
                <div className="action-btn">
                    <IconWrap icon={CloseIcon} />
                </div>
            </div>
            <div className="modal-content">
                <div className="sub-content">
                    <div className="left-side">
                        <IconOptionBtn options={options} />
                        <div className="detail">
                            <div className="line"></div>
                            <BasicSwitch switchStatus={false} switchText={'Tự động tiếp nhận'} />
                        </div>
                    </div>
                    <div className="toggle-numdial" style={{ backgroundColor: showNumpad ? '#3D55CC' : 'rgba(61, 85, 204, 0.10) ' }} onClick={toggleNumPad}>
                        {showNumpad ?
                            <IconWrap icon={NumberDial} fill={'white'} />
                            : <IconWrap icon={NumberDial} />
                        }
                    </div>
                </div>
                {showNumpad ?
                    <div className="main-content">
                        <div className="call-out-seting">
                            <DropDown />
                        </div>
                        <div className="call-out-input">
                            <DropDown />
                            <div className="num-pad">
                                <div className="num-wrapper">
                                    <PhoneBtnLine line={['1', '2', '3']} />
                                    <PhoneBtnLine line={['4', '5', '6']} />
                                    <PhoneBtnLine line={['7', '8', '9']} />
                                    <PhoneBtnLine line={['*', '0', '#']} />
                                </div>
                            </div>
                        </div>
                    </div>
                    : ringging ?
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            alignSelf: 'stretch',
                            borderTop: '1px solid var(--border-neutral-neutral-light, #DADCE5)',
                            background: 'var(--background-container, #FFF)',
                        }}>
                            {callDirection ?
                                <div>

                                </div>
                                : ''}
                        </div> :
                        <div style={{ display: 'flex', padding: '64px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '24px', alignSelf: 'stretch' }}>
                            <div style={{ display: 'flex', width: '322px', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                                <IconWrap icon={PhoneRestrict} fill={'#5C6073'} additionalStyle={{
                                    borderRadius: '999px',
                                    display: 'flex',
                                    padding: 'var(--space-16px, 16px)',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '8px',
                                    backgroundColor: 'rgba(151, 154, 168, 0.10)',
                                    cursor: 'default'
                                }} />
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: 'var(--space-4px, 4px)',
                                    alignSelf: 'stretch'
                                }}><p className='primary-text'>Không có cuộc gọi đến</p></div>
                            </div>
                        </div>}
            </div >
        </div >
    )
}

export default CSCallModal

const options = [
    { icon: HeadSet, title: 'Apple', subtitle: 'iOS Devices' },
    { icon: HeadSet, title: 'Android', subtitle: 'Android Devices' },
    { icon: HeadSet, title: 'Windows', subtitle: 'Windows Devices' }
];