import React from "react";
import logo from "../images/hetea.png";
import { Link, Redirect } from "react-router-dom";
import RightSideMenuLogout from "./RightSideMenuLogout";
import RightSideMenuLogin from "./RightSideMenuLogin";
import { connect } from "react-redux";
import { logout } from "../actions/AuthenticationActions";
import {getCurrentUserRequest} from "../actions/UserActions";

class Header extends React.Component {

  componentDidMount() {
    console.log("abc");
    if(this.props.isLogin){
      const token = localStorage.getItem("user");
      this.props.fetchCurrentUser(token);
    }
  }


  render() {
    const state = this.props;


    const renderRightSide = () => {
      if (state.isLogin) {
        return (
          <RightSideMenuLogin
            avatar={state.avatar}
            name={state.name}
            role={state.accountType}
            logout={() => state.logout()}
          />
        );
      }
      return <RightSideMenuLogout />;
    };

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

              {renderRightSide()}
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
    avatar: state.UserReducer.currentUser.avatar,
    name: state.UserReducer.currentUser.name,
    accountType: state.UserReducer.currentUser.accountType
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(logout());
    },
    fetchCurrentUser: token => {
      dispatch(getCurrentUserRequest(token));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
