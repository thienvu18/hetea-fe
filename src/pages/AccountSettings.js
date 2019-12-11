import React from "react";
import { connect } from "react-redux";
import {
  getCurrentUserRequest,
  updateUserRequest
} from "../actions/UserActions";
import { Redirect } from "react-router-dom";

class AccountSettings extends React.Component {
  constructor(props) {
    super(props);
    this.name = "";
    this.email = "";
    this.currentPassword = "";
    this.NewPassword = "";
    this.ConfirmtPassword = "";
    this.avatar = "";
  }
  render() {
    const state = this.props;
    this.name = state.name;
    this.email = state.email;
    this.password = state.password;
    this.avatar = state.avatar;

    const token = localStorage.getItem("user");
    console.log(token);
    if (!token && state.isLogin === false) {
      return <Redirect to="/" />;
    }
    // state.fetchCurrentUser(token);
    return (
      <>
        {/*//             <!-- Dashboard Content*/}
        {/*// ================================================== -->*/}
        <div class="dashboard-content-container" data-simplebar>
          <div class="dashboard-content-inner">
            {/*// <!-- Dashboard Headline -->*/}
            <div class="dashboard-headline">
              <h3>Settings</h3>

              {/*// <!-- Breadcrumbs -->*/}
              <nav id="breadcrumbs" class="dark">
                <ul>
                  <li>
                    <a href="/#">Home</a>
                  </li>
                  <li>
                    <a href="/#">Tutor</a>
                  </li>
                  <li>Settings</li>
                </ul>
              </nav>
            </div>

            {/*// <!-- Row -->*/}
            <div class="row">
              {/*// <!-- Dashboard Box -->*/}
              <div class="col-xl-12">
                <div class="dashboard-box margin-top-0">
                  {/*// <!-- Headline -->*/}
                  <div class="headline">
                    <h3>
                      <i class="icon-material-outline-account-circle" /> My
                      Account
                    </h3>
                  </div>

                  <div class="content with-padding padding-bottom-0">
                    <div class="row">
                      <div class="col-auto">
                        <div
                          class="avatar-wrapper"
                          data-tippy-placement="bottom"
                          title="Change Avatar"
                        >
                          <img
                            class="profile-pic"
                            src={state.avatar}
                            alt="Avatar"
                          />
                          <div class="upload-button" />
                          <input
                            class="file-upload"
                            type="file"
                            accept="image/*"
                          />
                        </div>
                      </div>

                      <div class="col">
                        <div class="row">
                          <div class="col-xl-6">
                            <div class="submit-field">
                              <h5>First Name</h5>
                              <input
                                type="text"
                                class="with-border"
                                // value={this.name}
                                onChange={event =>
                                  (this.name = event.target.value)
                                }
                              />
                            </div>
                          </div>

                          <div class="col-xl-6">
                            <div class="submit-field">
                              <h5>Last Name</h5>
                              <input
                                type="text"
                                class="with-border"
                                value="Smith"
                              />
                            </div>
                          </div>

                          <div class="col-xl-6">
                            {/*// <!-- Account Type -->*/}
                            <div class="submit-field">
                              <h5>Account Type</h5>
                              <div class="account-type">
                                <div>
                                  <input
                                    type="radio"
                                    name="account-type-radio"
                                    id="freelancer-radio"
                                    class="account-type-radio"
                                    checked
                                  />
                                  <label
                                    form="freelancer-radio"
                                    class="ripple-effect-dark"
                                  >
                                    <i class="icon-material-outline-account-circle" />{" "}
                                    Tutor
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-xl-6">
                            <div class="submit-field">
                              <h5>Email</h5>
                              <input
                                type="text"
                                class="with-border"
                                value={this.email}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*// <!-- Dashboard Box -->*/}
              <div class="col-xl-12">
                <div class="dashboard-box">
                  {/*// <!-- Headline -->*/}
                  <div class="headline">
                    <h3>
                      <i class="icon-material-outline-face" /> My Profile
                    </h3>
                  </div>

                  <div class="content">
                    <ul class="fields-ul">
                      <li>
                        <div class="row">
                          <div class="col-xl-6">
                            <div class="submit-field">
                              <div class="bidding-widget">
                                {/*// <!-- Headline -->*/}
                                <span class="bidding-detail">
                                  Set your <strong>minimal hourly rate</strong>
                                </span>

                                {/*// <!-- Slider -->*/}
                                <div class="bidding-value margin-bottom-10">
                                  $<span id="biddingVal" />
                                </div>
                                <input
                                  class="bidding-slider"
                                  type="text"
                                  value=""
                                  data-slider-handle="custom"
                                  data-slider-currency="$"
                                  data-slider-min="5"
                                  data-slider-max="150"
                                  data-slider-value="35"
                                  data-slider-step="1"
                                  data-slider-tooltip="hide"
                                />
                              </div>
                            </div>
                          </div>

                          <div class="col-xl-6">
                            <div class="submit-field">
                              <h5>
                                Skills
                                <i
                                  class="help-icon"
                                  data-tippy-placement="right"
                                  title="Add up to 10 skills"
                                />
                              </h5>

                              {/*// <!-- Skills List -->*/}
                              <div class="keywords-container">
                                <div class="keyword-input-container">
                                  <input
                                    type="text"
                                    class="keyword-input with-border"
                                    placeholder="e.g. Angular, Laravel"
                                  />
                                  <button class="keyword-input-button ripple-effect">
                                    <i class="icon-material-outline-add" />
                                  </button>
                                </div>
                                <div class="keywords-list">
                                  <span class="keyword">
                                    <span class="keyword-remove" />
                                    <span class="keyword-text">Angular</span>
                                  </span>
                                  <span class="keyword">
                                    <span class="keyword-remove" />
                                    <span class="keyword-text">Vue JS</span>
                                  </span>
                                  <span class="keyword">
                                    <span class="keyword-remove" />
                                    <span class="keyword-text">iOS</span>
                                  </span>
                                  <span class="keyword">
                                    <span class="keyword-remove" />
                                    <span class="keyword-text">Android</span>
                                  </span>
                                  <span class="keyword">
                                    <span class="keyword-remove" />
                                    <span class="keyword-text">Laravel</span>
                                  </span>
                                </div>
                                <div class="clearfix" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="row">
                          <div class="col-xl-6">
                            <div class="submit-field">
                              <h5>Tagline</h5>
                              <input
                                type="text"
                                class="with-border"
                                value="iOS Expert + Node Dev"
                              />
                            </div>
                          </div>

                          <div class="col-xl-6">
                            <div class="submit-field">
                              <h5>Nationality</h5>
                              <select
                                class="selectpicker with-border"
                                data-size="7"
                                title="Select Job Type"
                                data-live-search="true"
                              >
                                <option value="TM">Turkmenistan</option>
                                <option value="TV">Tuvalu</option>
                                <option value="UG">Uganda</option>
                                <option value="UA">Ukraine</option>
                                <option value="GB">United Kingdom</option>
                                <option value="US" selected>
                                  United States
                                </option>
                                <option value="UY">Uruguay</option>
                                <option value="UZ">Uzbekistan</option>
                                <option value="YE">Yemen</option>
                                <option value="ZM">Zambia</option>
                                <option value="ZW">Zimbabwe</option>
                              </select>
                            </div>
                          </div>

                          <div class="col-xl-12">
                            <div class="submit-field">
                              <h5>Introduce Yourself</h5>
                              <textarea cols="30" rows="5" class="with-border">
                                Leverage agile frameworks to provide a robust
                                synopsis for high level overviews. Iterative
                                approaches to corporate strategy foster
                                collaborative thinking to further the overall
                                value proposition. Organically grow the holistic
                                world view of disruptive innovation via
                                workplace diversity and empowerment.
                              </textarea>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/*// <!-- Dashboard Box -->*/}
              <div class="col-xl-12">
                <div id="test1" class="dashboard-box">
                  {/*// <!-- Headline -->*/}
                  <div class="headline">
                    <h3>
                      <i class="icon-material-outline-lock" /> Password &
                      Security
                    </h3>
                  </div>

                  <div class="content with-padding">
                    <div class="row">
                      <div class="col-xl-4">
                        <div class="submit-field">
                          <h5>Current Password</h5>
                          <input
                            type="password"
                            class="with-border"
                            onChange={event =>
                              (this.currentPassword = event.target.value)
                            }
                          />
                        </div>
                      </div>

                      <div class="col-xl-4">
                        <div class="submit-field">
                          <h5>New Password</h5>
                          <input
                            type="password"
                            class="with-border"
                            onChange={event =>
                              (this.NewPassword = event.target.value)
                            }
                          />
                        </div>
                      </div>

                      <div class="col-xl-4">
                        <div class="submit-field">
                          <h5>Repeat New Password</h5>
                          <input
                            type="password"
                            class="with-border"
                            onChange={event =>
                              (this.ConfirmtPassword = event.target.value)
                            }
                          />
                        </div>
                      </div>

                      <div class="col-xl-12">
                        <div class="checkbox">
                          <input type="checkbox" id="two-step" checked />
                          <label form="two-step">
                            <span class="checkbox-icon" /> Enable Two-Step
                            Verification via Email
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*// <!-- Button -->*/}
              <div class="col-xl-12">
                <button
                  class="button ripple-effect big margin-top-30"
                  onClick={() =>
                    state.updateUser(state.id, this.name, state.avatar, token)
                  }
                >
                  Save Changes
                </button>
              </div>
            </div>
            {/*// <!-- Row / End -->*/}
          </div>
        </div>
        {/*// <!-- Dashboard Content / End -->*/}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogin: state.AuthenticationReducer.isLogin,
    token: state.AuthenticationReducer.token,
    id: state.UserReducer.currentUser.id,
    avatar: state.UserReducer.currentUser.avatar,
    name: state.UserReducer.currentUser.name,
    accountType: state.UserReducer.currentUser.accountType,
    email: state.UserReducer.currentUser.email
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrentUser: token => {
      dispatch(getCurrentUserRequest(token));
    },
    updateUser: (id, name, picture, token) => {
      dispatch(updateUserRequest(id, name, picture, token));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountSettings);
