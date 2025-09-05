import React, { useEffect, useState } from 'react';
import IconWrap from '../other/icon';
import IconButton from '../button/IconButton';
import { BackspaceIcon } from '../../../assets/icon/NewStyleIcon';

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
                    Icon={BackspaceIcon}
                    onClick={handleBackspace}
                    fill='#5C6073'
                />
            </div>
        </div>
    )
}

export default InputWithIcon;
