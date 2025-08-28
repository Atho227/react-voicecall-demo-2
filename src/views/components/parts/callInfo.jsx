import React, { useEffect, useState } from 'react'
import IconWrap from '../other/icon'
import { CallSignal, UserIcon } from '../../../assets/icon/ActiveStatusIcon'
import { PhoneDisconnect, PhoneRestrict } from '../../../assets/icon/PhoneIcons'
import NormalButton from '../button/NormalButton'
import { CallTransfer, } from '../../../assets/icon/ActionIcons'
import { useCall } from '../../../hooks/CallHook/useCall'
import { getServiceInfoById } from '../../../ultils/helper'
import ToggleIconButton from '../button/ToggleIconButton'
import { Microphone, MicrophoneSlash, PauseFill, PauseIcon, PhoneNormal } from '../../../assets/icon/NewStyleIcon'

const CallInfo = ({ }) => {
    const { callInfo, isMuting, isHolding, isCall, isRinging, isCallOut, isAnswer, currentServiceId } = useCall()
    const time = '00:00'

    const [currentService, setCurrentService] = useState('Mặc định')
    useEffect(() => {
        const current = getServiceInfoById(currentServiceId)
        setCurrentService(current?.descriptions)
        console.log('DEBUG đã chạy', current);
    }, [isCall, currentServiceId])

    return (isCall ?
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            alignSelf: 'stretch',
            borderTop: '1px solid var(--border-neutral-neutral-light, #DADCE5)',
            background: 'var(--background-container, #FFF)',
        }} >
            <div style={{ display: 'flex', padding: '16px', flexDirection: 'column', alignItems: 'flex-start', gap: '16px', alignSelf: 'stretch' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px', alignSelf: 'stretch' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', alignSelf: 'stretch' }}>
                        <p className='secondary-text' style={{ flex: '1 0 0' }}>{isRinging ? isCallOut ? 'Dịch vụ gọi ra' : isAnswer ? 'Dịch vụ nhận cuộc gọi' : 'Lỗi ' : 'Đang trong cuộc gọi'}</p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', }}>
                            <p className='secondary-text'>{isRinging ? '' : time}</p>
                            <IconWrap icon={CallSignal} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <IconWrap icon={PhoneNormal} fill={'#5C6073'} size={20} />
                        <p className='secondary-text bold' >{currentService}</p>
                    </div>
                </div>
                <div style={{ width: '328px', height: '1px', backgroundColor: '#DADCE5' }}></div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px', alignSelf: 'stretch' }}>
                    {isRinging ?
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'stretch' }}>
                            <p className='secondary-text bold' style={{ flex: '1 0 0' }}>{isCallOut ? 'Đang kết nối tới...' : isAnswer ? 'Cuộc gọi đến' : 'Lỗi'}</p>
                        </div> : ''
                    }
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'stretch' }}>
                        <div style={{ display: 'flex', height: '44px', alignItems: 'center', gap: '16px', flex: '1 0 0' }}>
                            <div style={{ width: '40px', height: '40px', flexShirk: '0', borderRadius: '99px', backgroundColor: '#DADCE5', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <IconWrap icon={UserIcon} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '4px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <p className='secondary-text bold'>{callInfo?.name || 'Nguyen Van A'}</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <IconWrap icon={PhoneNormal} fill={'#5C6073'} size={16} />
                                    <p className='small-text'>{callInfo?.phone || '1234567890'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{
                display: 'flex',
                padding: 'var(--space-12px, 12px) 16px',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: 'var(--space-12px, 12px)',
                alignSelf: 'stretch',
                backgroundColor: '#F5F6FA',
            }}>
                {!isRinging ?
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', alignSelf: 'stretch', }}>
                        <ToggleIconButton
                            isToggle={isMuting}
                            onClick={() => muteCall()}
                            IconInitial={Microphone}
                            IconAfter={MicrophoneSlash}
                        />
                        <ToggleIconButton
                            isToggle={isHolding}
                            onClick={() => holdCall()}
                            IconInitial={PauseIcon}
                            IconAfter={PauseFill}
                            size={20}
                        />
                        <div style={{ display: 'flex', flexDirection: 'column', flex: '1' }}>
                            <NormalButton text='Kết thúc' icon={PhoneDisconnect}
                                style={{ backgroundColor: '#FF451C', color: '#FFE7D1', }}
                                onClick={() => endCall()} />
                        </div>
                    </div>
                    : isCallOut ?
                        <NormalButton text='Hủy cuộc gọi' icon={PhoneDisconnect} onClick={() => endCall()} />
                        : isAnswer ? <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            gap: 'var(--space-12px, 12px)',
                            alignSelf: 'stretch',
                            backgroundColor: '#F5F6FA',
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '8px', alignSelf: 'stretch' }}>
                                <NormalButton text='Bỏ qua' style={{ flex: '1 0 0' }} onClick={() => endCall()} />
                                <NormalButton text='Tiếp nhận' style={{ flex: '1 0 0', backgroundColor: '#3D55CC', color: '#D9E1FC' }} onClick={() => onAcceptCall()} />
                            </div>
                            <p className='small-text' style={{ textAlign: 'center', color: '#787C91' }}>Cuộc gọi bị bỏ qua sẽ được tự động chuyển tiếp cho một chuyên viên khác.</p>
                        </div> : 'Error'
                }
            </div>
        </div >
        : <div style={{ display: 'flex', padding: '64px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '24px', alignSelf: 'stretch' }}>
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
        </div>
    )
}

export default CallInfo

const options = [
    { icon: CallTransfer, title: 'Trao đổi nội bộ', subtitle: 'Trao đổi với chuyên viên khác' },
    { icon: CallTransfer, title: 'Chuyển cho chuyên viên', subtitle: 'Chuyển đích danh một chuyên viên cụ thể' },
    { icon: CallTransfer, title: 'Chuyển theo đầu số', subtitle: 'Chuyển cho một chuyên viên bất kỳ có kỹ năng đầu số' }
];