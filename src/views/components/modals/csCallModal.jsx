import React, { useState } from 'react'
import IconWrap from '../div/icon'
import { NumberDial, PhoneNormalFill } from '../../../assets/icon/PhoneIcons'
import { Active } from '../../../assets/icon/ActiveStatusIcon'
import { CloseIcon, HeadSet } from '../../../assets/icon/ActionIcons'
import IconOptionBtn from '../button/iconOptionBtn'
import BasicSwitch from '../button/switch'
import DropDown from '../button/Dropdown'

const CSCallModal = () => {
    const [showNumpad, setShowNumPad] = useState(true)

    const toggleNumPad = () => {
        setShowNumPad(!showNumpad)
    }
    return (
        <div className='CS-Call'>
            <div className="modal-header">
                <div className="heading">
                    <IconWrap icon={PhoneNormalFill} />
                    <div className="primary-text">CS Call</div>
                    <Active />
                </div>
                <div className="action-btn">
                    <IconWrap icon={CloseIcon} />
                </div>
            </div>
            <div className="modal-content">
                <div className="sub-content">
                    <div className="left-side">
                        <IconOptionBtn options={options} />
                        <div className="detail">
                            <div className="line"></div>
                            <BasicSwitch switchStatus={false} switchText={'Tự động tiếp nhận'} />
                        </div>
                    </div>
                    <div className="toggle-numdial" style={{ backgroundColor: showNumpad ? '#3D55CC' : 'rgba(61, 85, 204, 0.10) ' }} onClick={toggleNumPad}>
                        {showNumpad ?
                            <IconWrap icon={NumberDial} fill={'white'} />
                            : <IconWrap icon={NumberDial} />
                        }
                    </div>
                </div>
                {showNumpad ?
                    <div className="main-content">
                        <div className="call-out-seting">
                            <DropDown />
                        </div>
                    </div>
                    : <div className="main-content"></div>}
            </div>
        </div >
    )
}

export default CSCallModal

const options = [
    { icon: HeadSet, title: 'Apple', subtitle: 'iOS Devices' },
    { icon: HeadSet, title: 'Android', subtitle: 'Android Devices' },
    { icon: HeadSet, title: 'Windows', subtitle: 'Windows Devices' }
];