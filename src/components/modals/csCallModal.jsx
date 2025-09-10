import React, { useEffect, useState } from 'react'
import IconWrap from '../other/icon'
import { NumberDial, PhoneNormal, PhoneNormalFill } from '../../assets/icon/PhoneIcons'
import { Active, Disable } from '../../assets/icon/ActiveStatusIcon'
import { CloseIcon, HeadSet } from '../../assets/icon/ActionIcons'
import BasicSwitch from '../button/switch'
import DropDown from '../button/Dropdown'
import PhoneBtnLine from '../other/phoneBtnLine'
import CallInfo from '../parts/callInfo'
import NormalButton from '../button/NormalButton'
import { useCall } from '../../hooks/CallHook/useCall'
import InputWithIcon from '../input/InputWithIcon'
import { setCurrent } from '../../ultils/helper'
import DropDownV2 from '../button/iconOptionBtn'
import { deviceTypes } from '../../assets/object/data'
import { ChervonDown } from '../../assets/icon/NewStyleIcon'

const CSCallModal = () => {
    const { online, isCall, serviceList, currentDevice, currentServiceId } = useCall();

    const [showNumpad, setShowNumPad] = useState(true)
    const [phone, setPhone] = useState('')

    const toggleNumPad = () => {
        setShowNumPad(!showNumpad)
    }

    useEffect(() => {
        if (isCall) { setShowNumPad(false); }
    }, [isCall]);

    const calOutAction = () => {
        csCallout(phone, currentServiceId)
    }

    const handlePhoneBtnClick = (val) => {
        setPhone(prev => prev + val);
    };

    const chooseCurrentById = (id) => {
        const newService = setCurrent(serviceList, id)
        window.store.dispatch({ type: "call/setServiceList", payload: newService })
        window.store.dispatch({ type: "call/currentServiceId", payload: id })
    }

    return (
        <div className='CS-Call'>
            <div className="modal-header">
                <div className="heading">
                    <IconWrap icon={PhoneNormalFill} />
                    <div className="primary-text">CS Call</div>
                    {online ? <Active /> : <Disable />}
                </div>
                <div className="action-btn">
                    <IconWrap icon={CloseIcon} />
                </div>
            </div>
            <div className="modal-content">
                <div className="sub-content">
                    <div className="left-side">
                        <DropDownV2
                            options={deviceTypes}
                            currentType={currentDevice}
                            onSelect={(opt) => changeDevice(opt.type)}
                        >
                            {({ selected, toggle, isOpen }) => (
                                <button
                                    className="icon-dropdown-btn"
                                    onClick={toggle}
                                >
                                    {selected && <selected.icon size={20} />}
                                    <ChervonDown />
                                </button>
                            )}
                        </DropDownV2>
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
                            <DropDown options={serviceList} setCurrent={chooseCurrentById} />
                        </div>
                        <div className="call-out-input">
                            <InputWithIcon label={'Tới số'} fIcon={PhoneNormal} updateValue={setPhone} outvalue={phone} />
                            <div className="num-pad">
                                <div className="num-wrapper">
                                    <PhoneBtnLine line={['1', '2', '3']} onClick={handlePhoneBtnClick} />
                                    <PhoneBtnLine line={['4', '5', '6']} onClick={handlePhoneBtnClick} />
                                    <PhoneBtnLine line={['7', '8', '9']} onClick={handlePhoneBtnClick} />
                                    <PhoneBtnLine line={['*', '0', '#']} onClick={handlePhoneBtnClick} />
                                </div>
                            </div>
                        </div>
                        <NormalButton text='Gọi' style={{ color: '#D9E1FC', backgroundColor: '#3D55CC' }} onClick={calOutAction} />
                    </div>
                    : <CallInfo />}
            </div >
        </div >
    )
}

export default CSCallModal

const options = [
    { icon: HeadSet, title: 'Apple', subtitle: 'iOS Devices' },
    { icon: HeadSet, title: 'Android', subtitle: 'Android Devices' },
    { icon: HeadSet, title: 'Windows', subtitle: 'Windows Devices' }
];