import React, { useEffect, useState } from 'react'
import './LeftSideBar.css'
import { KeyIcon, List, Plugs, PlugsConnected } from '../../assets/icon/NewStyleIcon'
import NormalButton from '../button/NormalButton'
import NormalInput from '../input/Input';
import { generateToken, onReloaded } from '../../ultils/helper';
import { useLocalStorage } from '../../hooks/useLocalstorage';
import { LoginApi } from '../../ultils/api/VoiceLoginApi';
import { useSelector } from 'react-redux';
import NavItem from './NavItem';

const LeftSideBar = () => {
    const { isLoggedIn } = useSelector(state => state.auth)
    const [isExpanded, setIsExpanded] = useState(true);
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
        LoginApi(loginInfo.domain, loginInfo.token)
            .then(data => {
                console.log("Login response:", data);
            })
            .catch(err => {
                console.error("Login failed:", err);
            });
        onReloaded()
    }
    return (
        <div
            className="sidebar"
            style={{ width: isExpanded ? "250px" : "64px", }}
        >
            <NavItem Icon={List} text={'Support Panel'} isExpanded={isExpanded} onClick={() => setIsExpanded(!isExpanded)} style={{ borderBottom: '1px solid #ccc' }} />
            <div style={{ flex: '1 0 0', width: '100%', overflowY: 'auto', borderBottom: "1px solid #ccc", display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <NavItem Icon={KeyIcon} text={'Thông tin đăng nhập'} isExpanded={isExpanded} onClick={() => setIsExpanded(!isExpanded)} />
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
                                {isLoggedIn ? <NormalButton text='Đã đăng nhập' />
                                    : <NormalButton text='Đăng nhập' onClick={() => onLogin()} />}
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
                        onClick={() => { }}
                    />
                )}
            </div>
        </div>
    );
};


export default LeftSideBar