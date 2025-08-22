import React from 'react'
import IconWrap from '../other/icon'
import { CallSignal, UserIcon } from '../../../assets/icon/ActiveStatusIcon'
import { PhoneDisconnect, PhoneNormal } from '../../../assets/icon/PhoneIcons'
import NormalButton from '../button/NormalButton'
import IconOptionBtn from '../button/iconOptionBtn'
import { CallTransfer, Microphone, Pause } from '../../../assets/icon/ActionIcons'
import IconButton from '../button/IconButton'
import { useCall } from '../../../hooks/CallHook/useCall'

const CallInfo = ({ }) => {
    const { callStatus, callDirection, endCall, callInfo } = useCall()
    const time = '00:00'
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            alignSelf: 'stretch',
            borderTop: '1px solid var(--border-neutral-neutral-light, #DADCE5)',
            background: 'var(--background-container, #FFF)',
        }}>
            <div style={{ display: 'flex', padding: '16px', flexDirection: 'column', alignItems: 'flex-start', gap: '16px', alignSelf: 'stretch' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px', alignSelf: 'stretch' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', alignSelf: 'stretch' }}>
                        <p className='secondary-text' style={{ flex: '1 0 0' }}>{callStatus === 'calling' ? 'Đang trong cuộc gọi' : callDirection === 'out' ? 'Dịch vụ gọi ra' : 'Dịch vụ nhận cuộc gọi'}</p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', }}>
                            <p className='secondary-text'>{callStatus === 'calling' ? time : ''}</p>
                            <IconWrap icon={CallSignal} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <IconWrap icon={PhoneNormal} fill={'#5C6073'} />
                        <p className='secondary-text bold' style={{}}>Dịch vụ mặc định</p>
                    </div>
                </div>
                <div style={{ width: '328px', height: '1px', backgroundColor: '#DADCE5' }}></div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px', alignSelf: 'stretch' }}>
                    {callStatus === 'calling' ? '' :
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'stretch' }}>
                            <p className='secondary-text bold' style={{ flex: '1 0 0' }}>{callDirection === 'out' ? 'Đang kết nối tới...' : 'Cuộc gọi đến'}</p>
                        </div>
                    }
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'stretch' }}>
                        <div style={{ display: 'flex', height: '44px', alignItems: 'center', gap: '16px', flex: '1 0 0' }}>
                            <div style={{ width: '40px', height: '40px', flexShirk: '0', borderRadius: '99px', backgroundColor: '#DADCE5', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <IconWrap icon={UserIcon} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '4px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <p className='secondary-text bold'>{callInfo.name}</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <IconWrap icon={PhoneNormal} fill={'#5C6073'} additionalStyle={{ width: '16px', height: '16px' }} />
                                    <p className='small-text'>{callInfo.phone}</p>
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
                {callStatus === 'calling' ?
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', alignSelf: 'stretch' }}>
                        <IconOptionBtn options={options} btnStyle={{ borderRadius: '999px', backgroundColor: 'rgba(61, 85, 204, 0.10)' }} fill={'#3D55CC'} />
                        <IconButton icon={Microphone} iconStyle={{ width: '24px', height: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
                        <IconButton icon={Pause} iconStyle={{ width: '24px', height: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
                        <NormalButton text='Hủy cuộc gọi' icon={PhoneDisconnect} style={{ height: '40px', backgroundColor: '#FF451C', color: '#FFE7D1', flex: '1 0 0', alignSelf: 'center' }} />
                    </div>
                    : callDirection === 'out' ?
                        <NormalButton text='Hủy cuộc gọi' icon={PhoneDisconnect} style={{ backgroundColor: '#FF451C', color: '#FFE7D1' }} onClick={() => endCall()} /> :
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            gap: 'var(--space-12px, 12px)',
                            alignSelf: 'stretch',
                            backgroundColor: '#F5F6FA',
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '8px', alignSelf: 'stretch' }}>
                                <NormalButton text='Bỏ qua' style={{ flex: '1 0 0' }} />
                                <NormalButton text='Tiếp nhận' style={{ flex: '1 0 0', backgroundColor: '#3D55CC', color: '#D9E1FC' }} />
                            </div>
                            <p className='small-text' style={{ textAlign: 'center', color: '#787C91' }}>Cuộc gọi bị bỏ qua sẽ được tự động chuyển tiếp cho một chuyên viên khác.</p>
                        </div>
                }
            </div>
        </div >
    )
}

export default CallInfo

const options = [
    { icon: CallTransfer, title: 'Trao đổi nội bộ', subtitle: 'Trao đổi với chuyên viên khác' },
    { icon: CallTransfer, title: 'Chuyển cho chuyên viên', subtitle: 'Chuyển đích danh một chuyên viên cụ thể' },
    { icon: CallTransfer, title: 'Chuyển theo đầu số', subtitle: 'Chuyển cho một chuyên viên bất kỳ có kỹ năng đầu số' }
];