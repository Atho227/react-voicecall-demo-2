import React from 'react'
import IconWrap from '../div/icon'
import { PhoneCallOut } from '../../../assets/icon/PhoneIcons'
import { ChervonDown } from '../../../assets/icon/ActionIcons'

const DropDown = ({ options }) => {
    return (
        <div className='input'>
            <div className="label"><span className='small-text'>Gọi từ dịch vụ</span></div>
            <div className="input-wrapper">
                <IconWrap icon={PhoneCallOut} />
                <input disabled className='input-area' type="text" value={'Dịch vụ mặc định'} />
                <IconWrap icon={ChervonDown} />
            </div>
        </div>
    )
}

export default DropDown