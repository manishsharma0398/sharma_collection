import { cartTypes } from "./cart-types";

const initialState = {
  hidden: true,
};

const cartReducer = (state = initialState, { type }) => {
  switch (type) {
    case cartTypes.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };

    default:
      return state;
  }
};

export default cartReducer;
