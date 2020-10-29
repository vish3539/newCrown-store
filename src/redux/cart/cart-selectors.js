import { createSelector } from "reselect";
// input selctor -usually a function that takes  this naming structure
const selectCart = state => state.cart;
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const  selecartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
) 

/// this is for counting -cart items -> copied from cartIconComponent.js

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);
