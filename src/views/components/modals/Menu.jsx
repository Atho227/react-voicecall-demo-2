import React, { useEffect } from 'react'
import { PhoneCallOut, UserCirle } from '../../../assets/icon/NewStyleIcon'

const OptionsMenu = ({ data, setCurrent, style, setShowMenu }) => {
    const isLoading = !data // chỉ cần check thẳng prop
    return (
        <div style={{ position: 'absolute', top: 'calc(100% + 2px)', left: '50%', transform: 'translateX(-50%)', display: 'flex', width: '248px', padding: '8px', alignItems: 'flex-start', gap: '8px', borderRadius: '8px', backgroundColor: '#FFF', boxShadow: '0 1px 8px 0 rgba(0, 0, 0, 0.12)', ...style }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flex: '1 0 0' }}>
                {isLoading ? 'Loading' :
                    data.map((item, i) => {
                        return (
                            <div key={i}
                                onClick={() => {
                                    setShowMenu(false)
                                    setCurrent(item.id)
                                }}
                                className='hover' style={{
                                    display: 'flex', padding: '4px 12px', alignItems: 'center', gap: '12px', alignSelf: 'stretch',
                                    borderRadius: '12px',
                                    backgroundColor: item.curent ? '#F5F6FA' : '',
                                }}>
                                <PhoneCallOut />
                                <p className='small-text bold' style={{ color: item.curent ? '#3D55CC' : '', }}>{item.descriptions}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default OptionsMenu

const defaultData = [
    { id: 1, icon: UserCirle, title: '0987654321' },
    { id: 2, icon: UserCirle, title: '0987654321' },
    { id: 3, icon: UserCirle, title: '0987654321' },
    { id: 4, icon: UserCirle, title: '0987654321' },
    { id: 5, icon: UserCirle, title: '0987654321' },
    { id: 6, icon: UserCirle, title: '0987654321' },
]