import React, { useState } from 'react'
import IconButton from '../button/IconButton'
import { PhoneNormalFill } from '../../../assets/icon/PhoneIcons'
import NormalButton from '../button/NormalButton'

const CallingModal = () => {
    const [callingState, setCallingState] = useState('')

    return (
        <div className='floating-modal-wrapper' style={{ position: 'absolute', top: '50px', left: '50px' }}>
            <div className="floating-modal">
                <div className="basic-info">
                    <div className="draggable">
                        <div className="rectangle"></div>
                    </div>
                    <div className="content">
                        <div className="content-main">
                            <div className="hide-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M2.4694 9.46927L7.4694 4.46926C7.53908 4.39934 7.62187 4.34387 7.71304 4.30601C7.8042 4.26816 7.90194 4.24867 8.00065 4.24867C8.09936 4.24867 8.1971 4.26816 8.28827 4.30601C8.37943 4.34387 8.46222 4.39934 8.5319 4.46926L13.5319 9.46927C13.6728 9.61016 13.752 9.80126 13.752 10.0005C13.752 10.1998 13.6728 10.3909 13.5319 10.5318C13.391 10.6727 13.1999 10.7518 13.0007 10.7518C12.8014 10.7518 12.6103 10.6727 12.4694 10.5318L8.00003 6.06239L3.53065 10.5324C3.38976 10.6733 3.19866 10.7524 2.9994 10.7524C2.80015 10.7524 2.60905 10.6733 2.46815 10.5324C2.32726 10.3915 2.2481 10.2004 2.2481 10.0011C2.2481 9.80188 2.32726 9.61079 2.46815 9.46989L2.4694 9.46927Z" fill="#5C6073" />
                                </svg>
                            </div>
                            <div className="content-info">
                                <div className="time">00:00</div>
                                <div ><span className="name">Nguyen Van A</span></div>
                            </div>
                        </div>
                        <div className="btn-group">
                            <IconButton icon={PhoneNormalFill} />
                            <IconButton icon={PhoneNormalFill} />
                            <IconButton icon={PhoneNormalFill} />
                        </div>
                    </div>
                </div>
                <div className="forward-wrapper">
                    <NormalButton icon={PhoneNormalFill} />
                </div>
            </div>
        </div>
    )
}

export default CallingModal