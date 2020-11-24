import React from "react";
import { connect } from "react-redux";
import {
  addItem,
  clearItemFromCart,
  removeItem,
} from "../../redux/cart/cart-actions";
import "./CheckoutItem.scss";

const CheckoutItem = ({
  cartItem,
  clearItem,
  decreaseQuantity,
  increaseQuantity,
}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div onClick={() => decreaseQuantity(cartItem)} className="arrow">
          &#10094;
        </div>
        {quantity}
        <div onClick={() => increaseQuantity(cartItem)} className="arrow">
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div onClick={() => clearItem(cartItem)} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  increaseQuantity: (item) => dispatch(addItem(item)),
  decreaseQuantity: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
