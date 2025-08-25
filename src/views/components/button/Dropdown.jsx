import React, { useState } from 'react'
import IconWrap from '../other/icon'
import { PhoneCallOut } from '../../../assets/icon/PhoneIcons'
import { ChervonDown } from '../../../assets/icon/ActionIcons'
import OptionsMenu from '../modals/Menu'

const DropDown = ({ options, currentOp }) => {
    const [showMenu, setShowMenu] = useState(false)
    const isLoading = !options // chỉ cần check thẳng prop
    return (
        <div className='input' style={{ position: 'relative' }}>
            <div className="label">
                <span className='small-text'>Gọi từ dịch vụ</span>
            </div>

            <div className="input-wrapper" onClick={() => !isLoading && setShowMenu(!showMenu)}>
                <IconWrap icon={PhoneCallOut} />
                <p className='input-area'>
                    {isLoading
                        ? 'Đang tải...'
                        : currentOp?.descriptions || 'Chưa có dịch vụ'
                    }
                </p>
                <IconWrap icon={ChervonDown} />
            </div>

            {showMenu && !isLoading && (
                <OptionsMenu style={{ width: '100%' }} data={options} />
            )}
        </div>
    )
}

export default DropDown
