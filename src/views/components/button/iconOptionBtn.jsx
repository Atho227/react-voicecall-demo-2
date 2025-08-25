import React, { useState, useRef, useEffect } from 'react';
import MenuVariant2 from '../modals/MenuVariant2';

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
        console.log('DEBUG đã chọn', option);
        setSelected(option);
        setIsOpen(false);
        onSelect?.(option);
    };

    return (
        <div ref={ref} style={{ position: "relative", display: "inline-block" }}>
            {children({ isOpen, selected, toggle: () => setIsOpen(!isOpen) })}

            {isOpen && (
                <MenuVariant2
                    data={options}
                    onSelectOption={handleSelect} />
            )}
        </div>
    );
};

export default DropDownV2;
