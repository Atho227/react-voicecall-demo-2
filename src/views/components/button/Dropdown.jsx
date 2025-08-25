import React, { useState } from 'react'
import IconWrap from '../other/icon'
import { PhoneCallOut } from '../../../assets/icon/PhoneIcons'
import { ChervonDown } from '../../../assets/icon/ActionIcons'
import OptionsMenu from '../modals/Menu'

const DropDown = ({ options }) => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <div className='input' style={{ position: 'relative' }} onClick={() => setShowMenu(!showMenu)}>
            <div className="label"><span className='small-text'>Gọi từ dịch vụ</span></div>
            <div className="input-wrapper">
                <IconWrap icon={PhoneCallOut} />
                <p className='input-area' >
                    Dịch vụ mặc định
                </p>
                <IconWrap icon={ChervonDown} />
            </div>
            {
                showMenu ?
                    <OptionsMenu style={{ width: '100%' }} data={options} />
                    : ''
            }
        </div >
    )
}

export default DropDown