import React from "react";

import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./Header.scss";
import { connect } from "react-redux";
import CartMenu from "../cart-menu-header/CartMenu";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { currentUserSelector } from "../../redux/user/user-selector";
import { selectCartHidden } from "../../redux/cart/cart-selectors";
import { createStructuredSelector } from "reselect";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {!currentUser ? (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        ) : (
          <div onClick={() => auth.signOut()} className="option">
            SIGN OUT
          </div>
        )}
        <CartMenu />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
//   currentUser: currentUser,
//   hidden: hidden,
// });

const mapStateToProps = createStructuredSelector({
  currentUser: currentUserSelector,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
