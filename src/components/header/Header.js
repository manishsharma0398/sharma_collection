import React from "react";

import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./Header.scss";
import { connect } from "react-redux";

const Header = ({ currentUser }) => {
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
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
