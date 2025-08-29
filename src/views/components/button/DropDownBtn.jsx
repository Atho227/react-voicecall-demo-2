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
            <div>{children}</div>
        </DropdownContext.Provider>
    );
}

// Nút toggle
Dropdown.Button = function ({ children }) {
    const { open, setOpen } = useContext(DropdownContext);
    return (
        <div onClick={() => setOpen(!open)}>
            {typeof children === "function" ? children(open) : children}
        </div>
    );
};

// Danh sách option
Dropdown.List = function ({ children }) {
    const { open } = useContext(DropdownContext);
    if (!open) return null;
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
            {children}
        </div>
    );
};

// Option trong Dropdown
Dropdown.Item = function ({ option, children }) {
    const { value, select } = useContext(DropdownContext);
    const isActive = value?.value === option.value;

    return (
        <div
            onClick={() => select(option)}
            className={`px-3 py-2 cursor-pointer hover:bg-gray-100 ${isActive ? "bg-gray-200 font-semibold" : ""}`}
        >
            {children}
        </div>
    );
};
