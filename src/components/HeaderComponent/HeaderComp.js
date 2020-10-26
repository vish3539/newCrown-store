import React from "react";
import { Link } from "react-router-dom";
import "./HeaderStyle.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebaseUtil";
//connect is a higher order component that lets us modify our component to have
//access things related to redux.
import { connect } from "react-redux";
import CartIconComponent from "../cart-icon/cartIconComponent";
import CardDropComp from "../cartDropdown/CardDropComp";

function HeaderComp({ currentUser, hidden }) {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo"></Logo>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>

        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIconComponent />
      </div>
      {hidden ? null : <CardDropComp />}
    </div>
  );
}
// now we need to add one more property, So we can destruct it like this.
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(HeaderComp);
// the first param is going to be the function that allows us to have access to the state
// the state being our ROOTreducer
