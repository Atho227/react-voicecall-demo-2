import React from 'react'
import IconWrap from '../other/icon'
import { CallSignal, UserIcon } from '../../../assets/icon/ActiveStatusIcon'
import { PhoneDisconnect, PhoneNormal } from '../../../assets/icon/PhoneIcons'
import NormalButton from '../button/NormalButton'

const CallInfo = ({ callOut = true }) => {
    const callingStage = 'normal' //normal | connecting | ringging | calling |
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
                        <p className='secondary-text' style={{ flex: '1 0 0' }}>Dịch vụ gọi ra</p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', }}>
                            <p className='secondary-text'>{callingStage !== 'normal' ? time : ''}</p>
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
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'stretch' }}>
                        <p className='secondary-text bold' style={{ flex: '1 0 0' }}>Đang kết nối tới...</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'stretch' }}>
                        <div style={{ display: 'flex', height: '44px', alignItems: 'center', gap: '16px', flex: '1 0 0' }}>
                            <div style={{ width: '40px', height: '40px', flexShirk: '0', borderRadius: '99px', backgroundColor: '#DADCE5', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <IconWrap icon={UserIcon} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '4px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <p className='secondary-text bold'>User Name</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <IconWrap icon={PhoneNormal} fill={'#5C6073'} additionalStyle={{ width: '16px', height: '16px' }} />
                                    <p className='small-text'>0987654321</p>
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
                <NormalButton text='Hủy cuộc gọi' icon={PhoneDisconnect} style={{ backgroundColor: '#FF451C', color: '#FFE7D1' }} />
            </div>
        </div >
    )
}

export default CallInfo