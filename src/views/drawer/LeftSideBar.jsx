import React, { useEffect, useState } from 'react'
import { KeyIcon, List, Plugs, PlugsConnected } from '../../assets/icon/NewStyleIcon'
import NormalButton from '../components/button/NormalButton'
import NormalInput from '../components/input/Input';
import { generateToken } from '../../ultils/helper';
import { useLocalStorage } from '../../hooks/useLocalstorage';

const LeftSideBar = () => {
    const [isExpanded, setIsExpanded] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isTokenCreation, setIsTokenCreation] = useState(false)
    const [tokenCreated, setTokenCreated] = useState(false)

    const [token, setToken] = useState('')
    const [loadedInfo, setLoadedInfo] = useLocalStorage('csInitInfo', {
        domain: '', token: ''
    })
    const [loginInfo, setLoginInfo] = useState({
        domain: loadedInfo.domain, token: loadedInfo.token
    })
    const [createTokenForm, setCreateTokenForm] = useState({
        agent_id: '', secret: ''
    })

    // useEffect(() => {
    //     (async () => {
    //         const token = await generateToken("12345", "mysecret");
    //         console.log("Generated token:", token);
    //     })();
    // }, []);

    const handleChangeLoginInfo = (e) => {
        setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
    };
    const handleChangeCreateTokenForm = (e) => {
        setCreateTokenForm({ ...createTokenForm, [e.target.name]: e.target.value });
    };

    async function createToken() {
        const tokenGenerated = await generateToken(createTokenForm.agent_id, createTokenForm.secret)
        setTokenCreated(true)
        setToken(tokenGenerated)
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(token)
            .then(() => {
                console.log("Copied:", token);
            })
            .catch((err) => {
                console.error("Failed to copy: ", err);
            });
    };

    const onLogin = () => {
        setLoadedInfo(loginInfo)
    }
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
            <div style={{ flex: '1 0 0', overflowY: 'auto', borderBottom: "1px solid #ccc", display: 'flex', flexDirection: 'column', gap: '8px', padding: '20px' }}>
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
                            <NormalInput
                                label='Domain'
                                name='domain'
                                value={loginInfo.domain}
                                onChange={handleChangeLoginInfo}
                            />
                            <NormalInput
                                label='Đăng nhập Token'
                                name='token'
                                value={loginInfo.token}
                                onChange={handleChangeLoginInfo}
                            />
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '8px', width: '100%' }}>
                                <NormalButton text='Đăng nhập' onClick={() => onLogin()} />
                                {/* <NormalButton text='Tạo Token' onClick={() => setIsTokenCreation(!isTokenCreation)} /> */}
                                <p className='small-text'>Chưa có token ? <span className='bold link-text' onClick={() => setIsTokenCreation(!isTokenCreation)}>Tạo ngay</span></p>
                            </div>
                        </div>
                        {isTokenCreation &&
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <p className='primary-text bold'>Tạo Token</p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', justifyContent: 'center', alignItems: 'center' }}>
                                    <NormalInput
                                        label='Agent Id'
                                        name='agent_id'
                                        value={createTokenForm.agent_id}
                                        onChange={handleChangeCreateTokenForm}
                                    />
                                    <NormalInput
                                        label='Voice API Key'
                                        name='secret'
                                        value={createTokenForm.secret}
                                        onChange={handleChangeCreateTokenForm}
                                    />
                                    <NormalButton text='Tạo Token ngay' onClick={createToken} />
                                </div>
                                {tokenCreated &&
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                                        <NormalInput label={'Token của bạn'} value={token} disabled />
                                        <span className='small-text bold link-text' style={{ position: 'absolute', top: '0', right: '4px' }}
                                            onClick={() => handleCopy()}>Copy</span>
                                    </div>
                                }
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