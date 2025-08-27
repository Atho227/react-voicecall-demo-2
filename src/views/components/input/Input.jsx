import React from 'react';

const NormalInput = ({ label, id, style, ...props }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                width: '100%',
                ...style,
            }}
        >
            {label && (
                <label
                    htmlFor={id}
                    style={{ fontSize: '12px', color: '#555' }}
                >
                    {label}
                </label>
            )}
            <div
                style={{
                    display: 'flex',
                    padding: '12px',
                    alignItems: 'center',
                    borderRadius: '12px',
                    border: '1px solid #DADCE5',
                    height: '40px',
                }}
            >
                <input
                    id={id}
                    style={{
                        width: '100%',
                        border: 'none',
                        outline: 'none',
                    }}
                    {...props}
                />
            </div>
        </div>
    );
};

export default NormalInput;
