import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButtonComp from "../CustomButton/CustomButtonComp";
import { connect } from "react-redux";
import CartItemComp from "../cart-item/CartItemComp";
import { selectCartItems } from "../../redux/cart/cart-selectors";
import {createStructuredSelector} from 'reselect';

function CardDropComp({ cartItems }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItemComp key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButtonComp>Go to Checkout</CustomButtonComp>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(CardDropComp);
