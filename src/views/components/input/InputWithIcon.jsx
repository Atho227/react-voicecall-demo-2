import React, { useEffect, useState } from 'react';
import IconWrap from '../other/icon';
import { Backspace } from '../../../assets/icon/ActionIcons';
import IconButton from '../button/IconButton';

const InputWithIcon = ({ label, fIcon, updateValue, outvalue }) => {
    const [value, setValue] = useState(outvalue);

    useEffect(() => {
        setValue(outvalue || '');
    }, [outvalue]);

    const handleBackspace = () => {
        const newValue = value.slice(0, -1);
        setValue(newValue);
        updateValue(newValue);
    }

    return (
        <div className='input'>
            <div className="label"><span className='small-text'>{label}</span></div>
            <div className="input-wrapper">
                {fIcon && <IconWrap icon={fIcon} />}
                <input
                    className='input-area'
                    type='text'
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value)
                        updateValue(e.target.value)
                    }}
                />
                <IconButton
                    icon={Backspace}
                    onClick={handleBackspace}
                    style={{
                        width: '24px', height: '24px', backgroundColor: "",
                    }} />
            </div>
        </div>
    )
}

export default InputWithIcon;
