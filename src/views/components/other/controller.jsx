import React from 'react'
import NormalButton from '../button/NormalButton'
import { useCall } from '../../../hooks/CallHook/useCall'

const Controller = () => {
    const { receiveCall } = useCall()

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpcHBob25lIjoiNTAwMCJ9.HppfyaTz5mxaKac9W_hpPjd0aziLiHFNOhzKsggI66A"
    const domain = "vi2"
    return (
        <div style={{ position: 'absolute', top: '50px', left: '50px', display: 'flex', gap: '8px', flexWrap: 'wrap', maxWidth: '150px' }}>
            <NormalButton text='csInit' onClick={() => csInit(token, domain)} />
            <NormalButton text='Kích hoạt thoại' onClick={() => csEnableCall()} />
            <NormalButton text='Gọi đến' onClick={() => receiveCall()} />
        </div>
    )
}

export default Controller