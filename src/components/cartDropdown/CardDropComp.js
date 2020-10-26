import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButtonComp from "../CustomButton/CustomButtonComp";

function CardDropComp() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <CustomButtonComp>Go to Checkout</CustomButtonComp>
      </div>
    </div>
  );
}

export default CardDropComp;
