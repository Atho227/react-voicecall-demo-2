import React, { useState, useRef, useEffect } from 'react';
import IconWrap from '../other/icon';
import { ChervonDown } from '../../../assets/icon/ActionIcons';

const IconOptionBtn = ({ options }) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(options[0]); // mặc định chọn option đầu
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="icon-option-btn" ref={dropdownRef} style={{ position: 'relative', display: 'inline-block' }}>
            <div
                className="icon-dropdown-btn"
                onClick={() => setOpen(!open)}
            >
                <IconWrap icon={selected.icon} />
                <IconWrap icon={ChervonDown} />
            </div>

            {open && (
                <div
                    className="dropdown-menu"
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        backgroundColor: '#fff',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        marginTop: '5px',
                        minWidth: '200px',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                        zIndex: 10
                    }}
                >
                    {options.map((option, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                setSelected(option);
                                setOpen(false);
                            }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '5px 10px',
                                cursor: 'pointer',
                                gap: '8px'
                            }}
                        >
                            <IconWrap icon={option.icon} />
                            <div className="option-text">
                                <div className="title">{option.title}</div>
                                {option.subtitle && <div className="subtitle" style={{ fontSize: '12px', color: '#666' }}>{option.subtitle}</div>}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default IconOptionBtn;
