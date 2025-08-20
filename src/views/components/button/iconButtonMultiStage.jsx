import React from 'react';
import IconWrap from '../div/icon';

/**
 * @param {Object} props
 * @param {number|string} props.stage - stage hiện tại
 * @param {Object} props.icons - object map stage -> icon component hoặc image
 * @param {function} [props.onClick] - callback khi click button
 */
const IconBtnMultiStages = ({ stage, icons, onClick }) => {
    const Icon = icons[stage]; // lấy icon theo stage hiện tại

    return (
        <div onClick={onClick}>
            <IconWrap icon={Icon} />
        </div>
    );
};

export default IconBtnMultiStages;
