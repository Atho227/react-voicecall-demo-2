import React, { useState } from 'react'
import { StarFill, StarOutline } from '../../../assets/icon/NewStyleIcon'

const ToggleIconButton = ({
    mainColor = '#3D55CC',
    secColor = 'rgba(61, 85, 204, 0.10)',
    IconInitial = StarOutline,
    IconAfter = StarFill,
    isToggle = false,
}) => {
    return (
        <button
            onClick={onclick}
            style={{
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '8px',
                gap: '8px',
                borderRadius: '999px',
                width: '40px', height: '40px',
                backgroundColor: isToggle ? mainColor : secColor,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
            }}>
            {isToggle ? <IconAfter size='20' fill={'#F5F6FA'} /> : <IconInitial size='20' fill={mainColor} />}
        </button>
    )
}

export default ToggleIconButton