import React from 'react';
import './CustomButtonStyle.scss'

function CustomButtonComp({children, ...otherProps}) {
    return (
        <button className='custom-button' {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButtonComp
