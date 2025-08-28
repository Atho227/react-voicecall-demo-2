import React, { useState } from 'react'
import { StarFill, StarOutline } from '../../../assets/icon/NewStyleIcon'
import { hexToRgb } from '../../../ultils/renderComponentUtils';

const ToggleIconButton = ({
    mainColor = '#3D55CC',
    size = 24,
    IconInitial = StarOutline,
    IconAfter = StarFill,
    isToggle = false,
    onClick,
    style,
}) => {
    const [isHover, setIsHover] = useState(false);
    let bgColor;
    if (isToggle) {
        bgColor = mainColor;
    } else {
        bgColor = isHover ? hexToRgb(mainColor, 0.2) : hexToRgb(mainColor, 0.1);
    }

    return (
        <button
            onClick={onClick}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            style={{
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '8px',
                gap: '8px',
                borderRadius: '999px',
                width: '40px',
                height: '40px',
                backgroundColor: bgColor,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                ...style,
            }}
        >
            {isToggle
                ? <IconAfter size={size} fill={'#F5F6FA'} />
                : <IconInitial size={size} fill={mainColor} />}
        </button>
    )
}

export default ToggleIconButton
