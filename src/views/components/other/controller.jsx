import React from 'react'
import NormalButton from '../button/NormalButton'
import { useCall } from '../../../hooks/CallHook/useCall'

const Controller = () => {
    const { receiveCall } = useCall()
    return (
        <div style={{ position: 'absolute', top: '50px', left: '50px' }}>
            <NormalButton text='Gọi đến' onClick={() => receiveCall()} />
        </div>
    )
}

export default Controller