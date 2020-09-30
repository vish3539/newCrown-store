import React from 'react';
import './CustomButtonStyle.scss'

function CustomButtonComp({children, isGoogleSignIn, ...otherProps}) {
    return (
        <button className={`${isGoogleSignIn ? 'google-sign-in':''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButtonComp
