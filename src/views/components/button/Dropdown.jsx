import React, { useState } from 'react'
import IconWrap from '../other/icon'
import { ChervonDown } from '../../../assets/icon/ActionIcons'
import OptionsMenu from '../modals/Menu'
import { PhoneCallOut } from '../../../assets/icon/NewStyleIcon'

const DropDown = ({ options }) => {
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
                        : options?.find(s => s.curent)?.descriptions || 'Chưa có dịch vụ'
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
