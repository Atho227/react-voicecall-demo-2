import React from 'react'
import IconWrap from '../other/icon'
import { CallSignal } from '../../../assets/icon/ActiveStatusIcon'

const CallInfo = ({ callOut = true }) => {
    const callingStage = 'normal' //normal | connecting | ringging | calling |
    const time = '00:00'
    return (
        <div style={{ display: 'flex', padding: '16px', flexDirection: 'column', alignItems: 'flex-start', gap: '16px', alignSelf: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px', alignSelf: 'stretch' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', alignSelf: 'stretch' }}>
                    <p className='secondary-text' style={{ flex: '1 0 0' }}> Cuộc gọi đến</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', }}>
                        <p className='secondary-text'>{callingStage !== 'normal' ? time : ''}</p>
                        <IconWrap icon={CallSignal} />
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>

                </div>
            </div>
            <div></div>
            <div></div>
        </div>
    )
}

export default CallInfo