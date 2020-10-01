import React from 'react';
import './signinupStyles.scss';
import SigninComp from './../../components/signIn/SigninComp'
import SignUpComponent from '../../components/SignUP/SignUpComponent';

function SigninupComp() {
    return (
        <div className='sign-in-and-sign-up'>
          <SigninComp/>
          <SignUpComponent/>
        </div>
    )
}

export default SigninupComp
