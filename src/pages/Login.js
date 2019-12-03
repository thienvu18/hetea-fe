import React from "react";
import LoginForm from "../components/LoginForm";

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <div id="titlebar" className="gradient">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>Log In</h2>
                  {/*<!-- Breadcrumbs -->*/}
                  <nav id="breadcrumbs" class="dark">
                      <ul>
                          <li><a href="/">Home</a></li>
                          <li>Log In</li>
                      </ul>
                  </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-5 offset-xl-3">
              <div className="login-register-page">
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
        {/*<!-- Spacer -->*/}
        <div class="margin-top-70" />
        {/*<!-- Spacer / End-->*/}
      </div>
    );
  }
}
