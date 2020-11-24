import { cartTypes } from "./cart-types";
import { addItemToCart, removeItemFromCart } from "./cart-utils";

const initialState = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case cartTypes.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };

    case cartTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload),
      };
    case cartTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload),
      };

    case cartTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== payload.id
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;
