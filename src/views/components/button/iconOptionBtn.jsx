import React, { useState, useRef, useEffect } from 'react';
import MenuVariant2 from '../modals/MenuVariant2';

const DropDownV2 = ({ options, onSelect, currentType, children }) => {
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
        const selected = options?.find(s => s.type === currentType)
        setSelected(selected)
    }, [currentType])

    const handleSelect = (option) => {
        setSelected(option);
        setIsOpen(false);
        onSelect?.(option);
    };

    if (typeof children !== "function") {
        console.error(
            "DropDownV2: expected a function-as-children, but got:",
            children
        );
        console.trace(); // hiện stack để biết được nó render từ component nào
    }
    return (
        <div ref={ref} style={{ position: "relative", display: "inline-block" }}>
            {typeof children === "function"
                ? children({ isOpen, selected, toggle: () => setIsOpen(!isOpen) })
                : null}
            {isOpen && (
                <MenuVariant2
                    data={options}
                    onSelectOption={handleSelect} />
            )}
        </div>
    );
};

export default DropDownV2;
