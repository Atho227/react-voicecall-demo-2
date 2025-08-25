import React, { useState, useRef, useEffect } from 'react';
import IconWrap from '../other/icon';
import { ChervonDown } from '../../../assets/icon/ActionIcons';

const DropDownV2 = ({ options, onSelect, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(null);
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    useEffect(() => {
        const selected = options?.find(s => s.choosen)
        setSelected(selected)
    }, [])

    const handleSelect = (option) => {
        setSelected(option);
        setIsOpen(false);
        onSelect?.(option);
    };

    return (
        <div ref={ref} style={{ position: "relative", display: "inline-block" }}>
            {/* renderTrigger → children dạng function */}
            {children({ isOpen, selected, toggle: () => setIsOpen(!isOpen) })}

            {isOpen && (
                <ul
                    style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        border: "1px solid #ccc",
                        background: "#fff",
                        listStyle: "none",
                        margin: 0,
                        padding: 0,
                        minWidth: "120px",
                    }}
                >
                    {options.map((opt) => (
                        <li
                            key={opt.type}
                            onClick={() => handleSelect(opt)}
                            style={{
                                padding: "8px",
                                cursor: "pointer",
                                background: selected?.id === opt.id ? "#eee" : "#fff",
                            }}
                        >
                            {opt.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DropDownV2;
