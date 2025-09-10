import React, { useEffect, useState } from 'react'
import CustomInput from '../input/CustomInput';

const Controller = () => {

    return (
        <div style={{
            position: 'absolute', top: '50px', right: '50px', display: 'flex', gap: '8px', flexWrap: 'wrap',
            maxWidth: '150px',
            width: '360px',
            backgroundColor: '#ccc'
        }}>
            <CustomInput />
        </div >
    )
}

export default Controller

