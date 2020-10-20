import React from 'react';
import {Link} from 'react-router-dom'
import './HeaderStyle.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from "../../firebase/firebaseUtil";
//connect is a higher order component that lets us modify our component to have
//access things related to redux.
import {connect} from 'react-redux'

function HeaderComp({currentUser}) {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'></Logo>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/contact'>
                    CONTACT
                </Link>
                
                {
                    currentUser ?
                    <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>
                }
                
            </div>
            
        </div>
    )
}

const mapStateToProps =state=>({
    currentUser:state.user.currentUser 
    // rootReducer(state)-->.user-->userReducer-->.currentUser
})

export default connect(mapStateToProps)(HeaderComp);
// the first param is going to be the function that allows us to have access to the state
// the state being our ROOTreducer
