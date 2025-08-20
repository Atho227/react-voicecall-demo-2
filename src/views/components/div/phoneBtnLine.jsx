import React from 'react'

const PhoneBtnLine = ({ line = ['1', '2', '3'] }) => {
    return (
        <div className='phone-line'>
            {line.map((item, index) => (
                <div key={index} className="phone-btn">
                    <span className='medium-title'>{item}</span>
                </div>
            ))}
        </div>
    )
}

export default PhoneBtnLine