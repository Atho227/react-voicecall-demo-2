import React from 'react'

const NormalInput = ({ style, label = false }) => {
    return (
        <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '4px', width: '100%',
            ...style,
        }}>
            <div style={{ display: 'flex', height: '20px', alignItems: 'center', gap: '4px' }}>
                <p className='small-text'>{label}</p>
            </div>
            <div className='input-style' style={{ display: 'flex', maxHeight: '40px', padding: '12px', alignItems: 'center', alignSelf: 'stretch', borderRadius: '12px' }}>
                <input type="text" className='secondary-text' style={{ width: "100%" }} />
            </div>
        </div>
    )
}

export default NormalInput