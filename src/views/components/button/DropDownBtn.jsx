import React, { createContext, useContext, useState } from "react";

const DropdownContext = createContext();

export function Dropdown({ children, value, onChange }) {
    const [open, setOpen] = useState(false);

    const select = (option) => {
        onChange?.(option);
        setOpen(false);
    };

    return (
        <DropdownContext.Provider value={{ open, setOpen, value, select }}>
            <div className="relative inline-block">{children}</div>
        </DropdownContext.Provider>
    );
}

// Nút toggle
Dropdown.Button = function ({ children }) {
    const { open, setOpen } = useContext(DropdownContext);
    return (
        <div onClick={() => setOpen(!open)} className="cursor-pointer select-none">
            {typeof children === "function" ? children(open) : children}
        </div>
    );
};

// Danh sách option
Dropdown.List = function ({ children }) {
    const { open } = useContext(DropdownContext);
    if (!open) return null;
    return (
        <ul className="absolute mt-2 border rounded shadow-md bg-white z-50">
            {children}
        </ul>
    );
};

// Option trong Dropdown
Dropdown.Item = function ({ option, children }) {
    const { value, select } = useContext(DropdownContext);
    const isActive = value?.value === option.value;

    return (
        <li
            onClick={() => select(option)}
            className={`px-3 py-2 cursor-pointer hover:bg-gray-100 ${isActive ? "bg-gray-200 font-semibold" : ""
                }`}
        >
            {children || option.label}
        </li>
    );
};
