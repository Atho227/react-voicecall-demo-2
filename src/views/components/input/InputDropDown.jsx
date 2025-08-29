import React, { useState } from 'react'
import { ChervonDown } from '../../../assets/icon/NewStyleIcon'

const InputDropDown = ({ label = false, placeHoder = '--Chọn--', onChange, ...props }) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "4px",
            flex: "1 0 0",
        }}>
            {label &&
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    alignSelf: "stretch",
                }}>
                    <p className='small-text'>{label}</p>
                </div>}
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "var(--space-4px, 4px)",
                alignSelf: "stretch",
            }}>
                <div style={{
                    display: "flex",
                    height: "40px",
                    padding:
                        "var(--space-12px, 12px) var(--space-8px, 8px) var(--space-12px, 12px) var(--space-16px, 16px)",
                    alignItems: "center",
                    gap: "var(--space-inline-8px, 8px)",
                    alignSelf: "stretch",
                    borderRadius: "12px",
                    border: "1px solid var(--dropdown-border-default, #DADCE5)",
                    background: "var(--input-background-default, #FFF)",
                    position: 'relative',
                }}
                    {...props}>
                    <input style={{ width: '90%' }} placeholder={placeHoder} />
                    <ChervonDown />
                </div>
            </div>
        </div>
    )
}

export default InputDropDown