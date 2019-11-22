import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from '../../actions/index'

import "./Header.scss";
const Header = props => {
  return (
    <header className="header">
      <nav className="main_nav">
        <ul className="public_menu">
          <li>
            <NavLink exa="true" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/create">Create</NavLink>
          </li>
        </ul>
        <ul className="auth_menu">
          {props.auth.isAuthenticated ? (
            <React.Fragment>
              <li>
                <a href="/api/logout">Logout</a>
                {/* <button onClick={props.logout} >Logout</button> */}
              </li>
              <li>
                <img className="avatar" src={props.auth.avatar} alt="" />
              </li>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            </React.Fragment>
          )}
        </ul>
      </nav>
    </header>
  );
};

const mapStateToProps = state => {
  return { auth: state.auth };
};
export default connect(mapStateToProps, {logout})(Header);
