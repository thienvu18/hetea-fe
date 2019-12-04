import React from 'react';
import logo from '../images/logo4.png'
// import '../App.css';

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <div id="footer">
          {/* <!-- Footer Top Section --> */}
          <div class="footer-top-section">
            <div class="container">
              <div class="row">
                <div class="col-xl-12">
                  {/* <!-- Footer Rows Container --> */}
                  <div class="footer-rows-container">
                    {/* <!-- Left Side --> */}
                    <div class="footer-rows-left">
                      <div class="footer-row">
                        <div class="footer-row-inner footer-logo">
                          <img src={logo} alt="logo" />
                        </div>
                      </div>
                    </div>

                    {/* <!-- Right Side --> */}
                    <div class="footer-rows-right">
                      {/* <!-- Social Icons --> */}
                      <div class="footer-row">
                        <div class="footer-row-inner">
                          <ul class="footer-social-links">
                            <li>
                              <a
                                href="/#"
                                title="Facebook"
                                data-tippy-placement="bottom"
                                data-tippy-theme="light"
                              >
                                <i class="icon-brand-facebook-f"/>
                              </a>
                            </li>
                            <li>
                              <a
                                href="/#"
                                title="Twitter"
                                data-tippy-placement="bottom"
                                data-tippy-theme="light"
                              >
                                <i class="icon-brand-twitter"/>
                              </a>
                            </li>
                            <li>
                              <a
                                href="/#"
                                title="Google Plus"
                                data-tippy-placement="bottom"
                                data-tippy-theme="light"
                              >
                                <i class="icon-brand-google-plus-g"/>
                              </a>
                            </li>
                            <li>
                              <a
                                href="/#"
                                title="LinkedIn"
                                data-tippy-placement="bottom"
                                data-tippy-theme="light"
                              >
                                <i class="icon-brand-linkedin-in"/>
                              </a>
                            </li>
                          </ul>
                          <div class="clearfix"/>
                        </div>
                      </div>

                      {/* <!-- Language Switcher --> */}
                      <div class="footer-row">
                        <div class="footer-row-inner">
                          <select
                            class="selectpicker language-switcher"
                            data-selected-text-format="count"
                            data-size="5"
                          >
                            <option selected>English</option>
                            <option>Français</option>
                            <option>Español</option>
                            <option>Deutsch</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Footer Rows Container / End --> */}
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Footer Top Section / End --> */}

          {/* <!-- Footer Middle Section --> */}
          <div class="footer-middle-section">
            <div class="container">
              <div class="row">
                {/* <!-- Links --> */}
                <div class="col-xl-2 col-lg-2 col-md-3">
                  <div class="footer-links">
                    <h3>For Candidates</h3>
                    <ul>
                      <li>
                        <a href="/#">
                          <span>Browse Jobs</span>
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <span>Add Resume</span>
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <span>Job Alerts</span>
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <span>My Bookmarks</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* <!-- Links --> */}
                <div class="col-xl-2 col-lg-2 col-md-3">
                  <div class="footer-links">
                    <h3>For Employers</h3>
                    <ul>
                      <li>
                        <a href="/#">
                          <span>Browse Candidates</span>
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <span>Post a Job</span>
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <span>Post a Task</span>
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <span>Plans & Pricing</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* <!-- Links --> */}
                <div class="col-xl-2 col-lg-2 col-md-3">
                  <div class="footer-links">
                    <h3>Helpful Links</h3>
                    <ul>
                      <li>
                        <a href="/#">
                          <span>Contact</span>
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <span>Privacy Policy</span>
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <span>Terms of Use</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* <!-- Links --> */}
                <div class="col-xl-2 col-lg-2 col-md-3">
                  <div class="footer-links">
                    <h3>Account</h3>
                    <ul>
                      <li>
                        <a href="/#">
                          <span>Log In</span>
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <span>My Account</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* <!-- Newsletter --> */}
                <div class="col-xl-4 col-lg-4 col-md-12">
                  <h3>
                    <i class="icon-feather-mail"/> Sign Up For a Newsletter
                  </h3>
                  <p>
                    Weekly breaking news, analysis and cutting edge advices on
                    job searching.
                  </p>
                  <form action="/#" method="get" class="newsletter">
                    <input
                      type="text"
                      name="fname"
                      placeholder="Enter your email address"
                    />
                    <button type="submit">
                      <i class="icon-feather-arrow-right"/>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Footer Middle Section / End --> */}
        </div>
      </div>
    );
  }
}
