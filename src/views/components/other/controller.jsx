import React, { useEffect, useState } from 'react'
import { useCall } from '../../../hooks/CallHook/useCall'

import NormalButton from '../button/NormalButton'
import ToggleIconButton from '../button/ToggleIconButton'
import { onReloaded, setCurrent } from '../../../ultils/helper'
import { ChervonDown, Microphone, MicrophoneSlash } from '../../../assets/icon/NewStyleIcon'
import { deviceTypes } from '../../../assets/object/data'

const Controller = () => {
    const { receiveCall, serviceList } = useCall()
    const [iconToggle, setIconToggle] = useState(false)

    return (
        <div style={{
            position: 'absolute', top: '50px', left: '50px', display: 'flex', gap: '8px', flexWrap: 'wrap',
            maxWidth: '150px',
            width: '360px',
        }}>
            <NormalButton text='csInit' onClick={() => onReloaded()} />
            <NormalButton text='Kích hoạt thoại' onClick={() => csEnableCall()} />
            <NormalButton text='Gọi đến' onClick={() => receiveCall()} />
            <ToggleIconButton
                onClick={() => {
                    holdCall()
                    setIconToggle(!iconToggle)
                }}
                isToggle={iconToggle}
                IconInitial={Microphone}
                IconAfter={MicrophoneSlash}
                mainColor='#67BF7F'
            />
        </div>
    )
}

export default Controller

