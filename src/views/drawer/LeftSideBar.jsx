import React, { useEffect, useState } from 'react'
import { KeyIcon, List, Plugs, PlugsConnected } from '../../assets/icon/NewStyleIcon'
import NormalButton from '../components/button/NormalButton'
import NormalInput from '../components/input/Input';
import { generateToken } from '../../ultils/helper';

const LeftSideBar = () => {
    const [isExpanded, setIsExpanded] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isTokenCreation, setIsTokenCreation] = useState(false)
    const [tokenCreated, setTokenCreated] = useState(false)
    const [token, setToken] = useState()

    useEffect(() => {
        (async () => {
            const token = await generateToken("12345", "mysecret");
            console.log("Generated token:", token);
        })();
    }, []);

    return (
        <div
            className="sidebar"
            style={{
                width: isExpanded ? "250px" : "64px",
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
                {isExpanded && <p style={{ flex: 1, textAlign: "center" }} className='primary-text bold'>Side Panel</p>}
            </div>
            <div style={{ flex: '1 0 0', borderBottom: "1px solid #ccc", display: 'flex', flexDirection: 'column', gap: '8px', padding: '20px' }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: "center", }}>
                    <KeyIcon />
                    {isExpanded &&
                        <div style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                            <p className='primary-text bold'>Thông tin đăng nhập</p>
                        </div>
                    }
                </div>
                {isExpanded &&
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '12px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', justifyContent: 'center', alignItems: 'center' }}>
                            <NormalInput label='Domain' />
                            <NormalInput label='Đăng nhập Token' />
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', width: '100%' }}>
                                <NormalButton text='Đăng nhập' style={{ flex: '1 0 0' }} />
                                <NormalButton text='Tạo Token' style={{ flex: '1 0 0' }} onClick={() => setIsTokenCreation(!isTokenCreation)} />
                            </div>
                        </div>
                        {isTokenCreation &&
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <p className='primary-text bold'>Tạo Token</p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', justifyContent: 'center', alignItems: 'center' }}>
                                    <NormalInput label='Agent Id' />
                                    <NormalInput label='Voice API Key' />
                                    <NormalButton text='Tạo Token ngay' onClick={() => setIsTokenCreation(!isTokenCreation)} />
                                </div>
                                <NormalInput label={'Token của bạn'} value={token} disabled />
                                <NormalButton text='copy' />
                            </div>
                        }
                    </div>
                }
            </div>
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