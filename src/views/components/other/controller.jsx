import React, { useEffect, useState } from 'react'

import { Dropdown } from '../button/DropDownBtn'
import { deviceTypes } from '../../../assets/object/data';
import { ChervonDown } from '../../../assets/icon/NewStyleIcon';

const options = deviceTypes

const Controller = () => {
    const [lang, setLang] = useState(options[0]);

    const handleChange = (option) => {
        console.log("Option được chọn:", option);
        setLang(option);
    };

    return (
        <div style={{
            position: 'absolute', top: '50px', right: '50px', display: 'flex', gap: '8px', flexWrap: 'wrap',
            maxWidth: '150px',
            width: '360px',
        }}>
            <Dropdown value={lang} onChange={handleChange}>
                <Dropdown.Button>
                    {(open) => (
                        <button style={{
                            display: 'inline-flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '8px',
                            borderRadius: '999px',
                            height: '40px',
                            backgroundColor: 'rgba(61, 85, 204, 0.1)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                        }}>
                            <lang.icon size={20} fill='#3d55ccff' />
                            <ChervonDown size={20} fill='#3d55ccff' />
                        </button>
                    )}
                </Dropdown.Button>

                <Dropdown.List>
                    {options.map((opt) => (
                        <Dropdown.Item key={opt.type} option={opt} >
                            <div
                                key={opt.type}
                                className='hover' style={{
                                    display: 'flex',
                                    padding: '4px 12px',
                                    alignItems: 'center',
                                    gap: '12px',
                                    alignSelf: 'stretch',
                                    borderRadius: '4px',
                                    backgroundColor: opt.isCurrent ? '#F5F6FA' : '',
                                    minHeight: '32px',
                                }}>
                                <opt.icon size={16} />
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',
                                    flex: '1 0 0',
                                }}>
                                    <p className='small-text bold' >{opt.title}</p>
                                    <p className='small-text' style={{ color: '#787C91' }}>{opt.description}</p>
                                </div>
                            </div>
                        </Dropdown.Item>
                    ))}
                </Dropdown.List>
            </Dropdown>
        </div >
    )
}

export default Controller

