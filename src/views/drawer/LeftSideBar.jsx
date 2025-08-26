import React, { useState } from 'react'
import { List, Plugs, PlugsConnected } from '../../assets/icon/NewStyleIcon'
import NormalButton from '../components/button/NormalButton'
import InputWithIcon from '../components/input/InputWithIcon';
import NormalInput from '../components/input/Input';

const LeftSideBar = () => {
    const [isExpanded, setIsExpanded] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div
            className="sidebar"
            style={{
                width: isExpanded ? "225px" : "64px",
                border: "1px solid #DADCE5",
                backgroundColor: "#FFF",
                display: "flex",
                flexDirection: "column",
                height: "100vh",
                minHeight: "730px",
            }}
        >
            {/* Header */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    height: "64px",
                    padding: "20px",
                    borderBottom: "1px solid #ccc",
                }}
            >
                <button aria-label="Toggle sidebar" onClick={() => setIsExpanded(!isExpanded)}>
                    <List size={24} />
                </button>
                {isExpanded && <p style={{ flex: 1, textAlign: "center" }}>Side Panel</p>}
            </div>

            {/* Login Section */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    height: "80px",
                    padding: "20px",
                }}
            >
                <button>
                    {isLoggedIn ? <PlugsConnected fill='#00994D' size='24' /> : <Plugs fill='#FF451C' size='24' />}
                </button>
                {isExpanded && (
                    <NormalButton
                        text={isLoggedIn ? "Logged In" : "Login"}
                        style={{
                            backgroundColor: isLoggedIn ? "#4BCC2E" : "#3D55CC",
                            color: "#FFF",
                            width: "100%",
                        }}
                        onClick={() => setIsLoggedIn(!isLoggedIn)}
                    />
                )}
            </div>
            {isExpanded &&
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '12px 20px' }}>
                    <NormalInput label='Token' />
                </div>
            }
        </div>
    );
};


export default LeftSideBar