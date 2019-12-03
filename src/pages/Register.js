import React from "react";
import RegisterForm from "../components/RegisterForm";

export default class Register extends React.Component {
  render() {
    return (
      <div>
        <div id="titlebar" className="gradient">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>Register</h2>
                  {/*<!-- Breadcrumbs -->*/}
                  <nav id="breadcrumbs" class="dark">
                      <ul>
                          <li><a href="/">Home</a></li>
                          <li>Register</li>
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
                <RegisterForm />
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
