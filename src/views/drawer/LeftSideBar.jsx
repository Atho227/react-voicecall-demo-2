import React, { useState } from 'react'
import { List, Plugs, PlugsConnected } from '../../assets/icon/NewStyleIcon'
import NormalButton from '../components/button/NormalButton'
import NormalInput from '../components/input/Input';

const LeftSideBar = () => {
    const [isExpanded, setIsExpanded] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div
            className="sidebar"
            style={{
                width: isExpanded ? "225px" : "64px",
                backgroundColor: "#FFF",
                display: "flex",
                flexDirection: "column",
                height: "100vh",
                minHeight: "730px",
                border: "1px solid #DADCE5",
            }}
        >
            <div style={{
                height: "64px",
                display: "flex",
                alignItems: "center",
                gap: "20px",
                borderBottom: "1px solid #ccc",
            }}
            >
                <button aria-label="Toggle sidebar"
                    style={{ height: '64px', padding: '20px' }}
                    onClick={() => setIsExpanded(!isExpanded)}>
                    <List size={24} />
                </button>
                {isExpanded && <p style={{ flex: 1, textAlign: "center" }}>Side Panel</p>}
            </div>
            <div style={{ flex: '1 0 0', borderBottom: "1px solid #ccc", }}>Mid</div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    height: '64px',
                    padding: "20px",
                }}
            >
                <button>
                    {isLoggedIn ? <PlugsConnected fill='#00994D' size='24' /> : <Plugs fill='#FF451C' size='24' />}
                </button>
                {isExpanded && (
                    <NormalButton
                        text={isLoggedIn ? "Đã đăng nhập" : "Chưa đăng nhập"}
                        style={{
                            backgroundColor: isLoggedIn ? "#4BCC2E" : "#3D55CC",
                            color: "#FFF",
                            width: "100%",
                            alignSelf: 'auto',
                        }}
                        onClick={() => setIsLoggedIn(!isLoggedIn)}
                    />
                )}
            </div>
        </div>
    );
};


export default LeftSideBar