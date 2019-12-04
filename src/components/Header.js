import React from "react";
import logo from "../images/logo3.png";
import { Link } from "react-router-dom";
import RightSideMenuLogout from "./RightSideMenuLogout";
import RightSideMenuLogin from "./RightSideMenuLogin";
import { connect } from "react-redux";
import {
  loginRequest,
  registerRequest
} from "../actions/AuthenticationActions";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.email = "";
    this.password = "";
    this.accountType = "";
    this.newEmail = "";
    this.newPassword = "";
    this.passwordConfirm = "";
  }

  render() {
    const state = this.props;
    return (
      <div>
        <header
          id="header-container"
          class="fullwidth dashboard-header not-sticky"
        >
          {/* <!-- Header --> */}
          <div id="header">
            <div class="container">
              {/* <!-- Left Side Content --> */}
              <div class="left-side">
                {/* <!-- Logo --> */}
                <div id="logo">
                  <Link to="/">
                    <img src={logo} alt="Logo" />
                  </Link>
                </div>
              </div>
              {/* <!-- Left Side Content / End --> */}

              {/* <!-- Right Side Content / End --> */}
              {state.isLogin ? (
                <RightSideMenuLogin />
              ) : (
                <RightSideMenuLogout
                  email={event => {
                    this.email = event.target.value;
                  }}
                  password={event => {
                    this.password = event.target.value;
                  }}
                  login={() => state.doLogin(this.email, this.password)}
                  accountType={event => {
                    this.accountType = event.target.value;
                  }}
                  newEmail={event => {
                    this.newEmail = event.target.value;
                  }}
                  newPassword={event => {
                    this.newPassword = event.target.value;
                  }}
                  passwordComfirm={event => {
                    this.passwordComfirm = event.target.value;
                  }}
                  register={() =>
                    state.doRegister(this.newEmail, this.newPassword)
                  }
                />
              )}
              {/* <!-- Right Side Content / End --> */}
            </div>
          </div>
          {/* <!-- Header / End --> */}
        </header>
        <div class="clearfix" />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isLogin: state.AuthenticationReducer.isLogin,
    msgErr: state.AuthenticationReducer.msgErr
  };
};

const mapDispatchToProps = dispatch => {
  return {
    doLogin: (email, pwd) => {
      dispatch(loginRequest(email, pwd));
    },
    doRegister: (newEmail, newPwd) => {
      dispatch(registerRequest(newEmail, newPwd));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
