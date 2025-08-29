import React, { useState } from 'react'
import { CloseIcon } from '../../../assets/icon/NewStyleIcon';
import NormalButton from '../button/NormalButton';
import InputDropDown from '../input/InputDropDown';
import ListItem from '../other/ListItem';

const SearchAgentModal = ({ setOpen, data = defaultData }) => {
    const [isShowMenu, setIsShowMenu] = useState(false)
    const [isLoadingData, setIsLoadingData] = useState(true)

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className='modal'
            style={{ position: "fixed", backgroundColor: "rgba(0,0,0,0.3)", width: '100%', height: '100%', top: '0', left: '0', display: 'flex', justifyContent: 'center', alignItems: 'center   ' }}
            onClick={handleClose}>
            <div
                style={{
                    display: "flex",
                    width: "350px",
                    padding: "0 var(--space-inset-24px, 24px) var(--space-24px, 24px) var(--space-inset-24px, 24px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: "16px",
                    borderRadius: "var(--radius-medium,12px)", // hoặc nếu có token CSS khác thì thay vào
                    border: "1px solid var(--border-neutral-neutral-light, #DADCE5)",
                    background: "var(--background-neutral-container, #FFF)",
                    boxShadow: "0 3px 12px 0 rgba(0, 0, 0, 0.10)",
                }}
                onClick={(e) => { e.stopPropagation() }} >
                <div style={{
                    display: "flex",
                    padding: "var(--space-inset-12px, 12px) 0",
                    justifyContent: "space-between",
                    alignItems: "center",
                    alignSelf: "stretch",
                    borderBottom: "1px solid var(--modal-divider, #DADCE5)",
                }}>
                    <div style={{
                        display: "flex",
                        width: "364px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                    }}>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "var(--space-4px, 4px)",
                            alignSelf: "stretch",
                        }}>
                            <p className='primary-text bold'>Chọn Agent để chuyển tiếp</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <CloseIcon />
                    </div>
                </div>
                <div className="m-content" style={{ position: 'relative' }}>
                    <InputDropDown label='Chọn Agent' placeHoder='--Tìm theo tên người dùng--' onClick={() => setIsShowMenu(!isShowMenu)} />
                    {isShowMenu &&
                        <div style={{
                            position: 'absolute', top: '101%', width: '100%',
                            display: "flex",
                            paddingBottom: "var(--space-4px, 4px)",
                            flexDirection: "column",
                            alignItems: "center",
                            borderRadius: "12px",
                            border: "1px solid var(--border-neutral-neutral-light, #DADCE5)",
                            background: "var(--background-container, #FFF)",
                            boxShadow: "0 3px 12px 0 rgba(0, 0, 0, 0.10)", // elevation-2
                            padding: '8px',
                            height: '200px',
                            overflowY: 'auto'
                        }}>
                            {data.map(item => {
                                return <ListItem key={item.id} data={item} />
                            })}
                        </div>
                    }
                </div>
                <div className="m-btn-group">
                    <NormalButton text='Áp dụng' style={{ backgroundColor: '#3D55CC', color: '#D9E1FC' }} />
                    <NormalButton text='Hủy' />
                </div>
            </div>
        </div>
    )
}

export default SearchAgentModal

const defaultData = [
    { id: 1212, username: '454545451214', email: '454545451214@gmail.com', avatarUrl: null },
    { id: 1213, username: 'thaopt', email: '454545451214@gmail.com', avatarUrl: null },
    { id: 1214, username: 'hung33', email: '454545451214@gmail.com', avatarUrl: null },
    { id: 1215, username: 'thaopt', email: '454545451214@gmail.com', avatarUrl: null },
    { id: 1216, username: 'hung33', email: '454545451214@gmail.com', avatarUrl: null },
    { id: 1217, username: 'thaopt', email: '454545451214@gmail.com', avatarUrl: null },
]