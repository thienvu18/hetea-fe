import React from "react";
import LoginForm from "../components/LoginForm";
import {
  clear,
  loginRequest,
  registerSocialRequest
} from "../actions/AuthenticationActions";
import { connect } from "react-redux";
import Redirect from "react-router-dom/es/Redirect";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.email = "";
    this.password = "";
    this.error = "abc";
  }

  login = () => {
    const state = this.props;

    if (this.email !== "" && this.password !== "") {
      state.doLogin(this.email, this.password);
    }
  };

  registerBySocial = (service, token) => {
    const state = this.props;
    return state.doRegisterBySocial(service, token);
  };

  render() {
    const state = this.props;

    console.log(state);
    if (state.isLogin) {
      return <Redirect to="/" />;
    }
    return (
      <div style={{ backgroundColor: "#f2f2f2" }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 offset-xl-3 margin-top-50">
              <div
                className="login-register-page"
                style={{
                  borderRadius: "5px",
                  padding: "50px",
                  backgroundColor: "white",
                  boxSizing: "border-box",
                  boxShadow: "0 1px 6px rgba(57,73,76,.35)"
                }}
              >
                <LoginForm
                  email={event => {
                    this.email = event.target.value;
                  }}
                  password={event => {
                    this.password = event.target.value;
                  }}
                  error={state.msgErr}
                  login={() => this.login()}
                  clear={() => state.clear()}
                  registerBySocial={this.registerBySocial}
                />
              </div>
            </div>
          </div>
          {/*// <!-- Spacer -->*/}
          <div class="margin-top-70" />
          {/*// <!-- Spacer / End-->*/}
        </div>
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
    doRegisterBySocial: (service, token) => {
      dispatch(registerSocialRequest(service, token));
    },
    clear: () => {
      dispatch(clear());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
