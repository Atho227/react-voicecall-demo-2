import React from 'react'
import { PhoneCallOut } from '../../../assets/icon/NewStyleIcon'

const MenuVariant2 = ({ data, onSelectOption }) => {
    const isLoading = !data // chỉ cần check thẳng prop
    return (
        <div style={{
            position: 'absolute',
            top: 'calc(100% + 2px)', left: '0', transform: '',
            display: 'flex',
            flexDirection: 'column',
            width: '302px',
            padding: '8px',
            alignItems: 'flex-start',
            gap: '8px',
            borderRadius: '8px',
            border: '1px solid #DADCE5',
            backgroundColor: '#FFF',
            boxShadow: '0 3px 12px 0 rgba(0, 0, 0, 0.10)',
            zIndex: '300',
        }}>
            {isLoading ? 'Loading' :
                data.map((item, i) => {
                    return (
                        <div key={item.id}
                            onClick={() => onSelectOption(item)}
                            className='hover' style={{
                                display: 'flex',
                                padding: '4px 12px',
                                alignItems: 'center',
                                gap: '12px',
                                alignSelf: 'stretch',
                                borderRadius: '4px',
                                backgroundColor: item.isCurrent ? '#F5F6FA' : '',
                                minHeight: '32px',
                            }}>
                            <item.icon size={16} />
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                flex: '1 0 0',
                            }}>
                                <p className='small-text bold' >{item.title}</p>
                                <p className='small-text' style={{ color: '#787C91' }}>{item.description}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MenuVariant2