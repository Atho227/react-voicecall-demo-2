import React, { useState, useMemo } from 'react'
import { CloseIcon } from '../../../assets/icon/NewStyleIcon';
import NormalButton from '../button/NormalButton';
import InputDropDown from '../input/InputDropDown';
import ListItem from '../other/ListItem';

const SearchAgentModal = ({ setOpen, data = defaultData }) => {
    const [isShowMenu, setIsShowMenu] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")

    const handleClose = () => {
        setOpen(false);
    };

    // lọc data theo username (hoặc email nếu muốn)
    const filteredData = useMemo(() => {
        if (!searchTerm) return data;
        return data.filter(item =>
            item.username.toLowerCase().includes(searchTerm.toLowerCase())
        )
    }, [data, searchTerm])

    return (
        <div className='modal'
            style={{ position: "fixed", backgroundColor: "rgba(0,0,0,0.3)", width: '100%', height: '100%', top: '0', left: '0', display: 'flex', justifyContent: 'center', alignItems: 'center   ' }}
            onClick={handleClose}>
            <div
                style={{
                    display: "flex",
                    width: "350px",
                    padding: "0 24px 24px 24px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: "16px",
                    borderRadius: "12px",
                    border: "1px solid var(--border-neutral-neutral-light, #DADCE5)",
                    background: "#FFF",
                    boxShadow: "0 3px 12px 0 rgba(0, 0, 0, 0.10)",
                }}
                onClick={(e) => { e.stopPropagation() }} >
                <div style={{
                    display: "flex",
                    padding: "12px 0",
                    justifyContent: "space-between",
                    alignItems: "center",
                    alignSelf: "stretch",
                    borderBottom: "1px solid var(--modal-divider, #DADCE5)",
                }}>
                    <p className='primary-text bold'>Chọn Agent để chuyển tiếp</p>
                    <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={handleClose}>
                        <CloseIcon />
                    </div>
                </div>

                <div className="m-content" style={{ position: 'relative' }}>
                    <InputDropDown
                        label='Chọn Agent'
                        placeHoder='--Tìm theo tên người dùng--'
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value)
                            setIsShowMenu(true) // mở menu khi gõ
                        }}
                        onClick={() => setIsShowMenu(!isShowMenu)}
                    />
                    {isShowMenu &&
                        <div style={{
                            position: 'absolute', top: '101%', width: '100%',
                            display: "flex",
                            paddingBottom: "4px",
                            flexDirection: "column",
                            alignItems: "center",
                            borderRadius: "12px",
                            border: "1px solid #DADCE5",
                            background: "#FFF",
                            boxShadow: "0 3px 12px 0 rgba(0, 0, 0, 0.10)",
                            padding: '8px',
                            maxHeight: '200px',
                            overflowY: 'auto',
                        }}>
                            {filteredData.length > 0 ? (
                                filteredData.map(item => (
                                    <ListItem key={item.id} data={item} />
                                ))
                            ) : (
                                <p className="small-text">Không tìm thấy agent</p>
                            )}
                        </div>
                    }
                </div>

                <div className="m-btn-group" style={{ display: "flex", gap: "8px", alignSelf: "stretch" }}>
                    <NormalButton text='Áp dụng' style={{ backgroundColor: '#3D55CC', color: '#D9E1FC' }} />
                    <NormalButton text='Hủy' onClick={handleClose} />
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
