import React from "react";
import { connect } from "react-redux";
import {
  getCurrentUserRequest,
  updatePasswordRequest,
  updateUserRequest
} from "../actions/UserActions";
import { Redirect } from "react-router-dom";
import RangeSlider from "../components/Slider";
import SkillTag from "../components/SkillTag";
import ContractForm from "../components/ContractForm";

class AccountStudent extends React.Component {
  constructor(props) {
    super(props);
    this.name = "";
    this.email = "";
    this.CurrentPassword = "";
    this.NewPassword = "";
    this.ConfirmPassword = "";
    this.address = "";
  }

  saveChanges = token => {
    // const state = this.props;
    // const { skillsArray } = this.state;
    //
    // if (
    //   this.CurrentPassword === "" &&
    //   this.NewPassword === "" &&
    //   this.ConfirmPassword === ""
    // ) {
    //   state.updateUser(
    //     state.idTutor,
    //     state.id,
    //     this.name,
    //     state.avatar,
    //     state.accountType,
    //     this.address,
    //     this.bio,
    //     skillsArray,
    //     this.hourlyRate,
    //     this.tagLine,
    //     token
    //   );
    //   return alert("Update information successful!");
    // } else if (this.CurrentPassword === "")
    //   return alert("Please enter your password!");
    // else if (this.NewPassword === this.ConfirmPassword) {
    //   state.updateUser(
    //     state.idTutor,
    //     state.id,
    //     this.name,
    //     state.avatar,
    //     state.accountType,
    //     this.address,
    //     this.bio,
    //     skillsArray,
    //     this.hourlyRate,
    //     this.tagLine,
    //     token
    //   );
    //   state.updatePassword(
    //     state.id,
    //     state.email,
    //     this.CurrentPassword,
    //     this.NewPassword
    //   );
    //   return alert("update successful");
    // } else {
    //   return alert("password not match");
    // }
  };

  render() {
    const state = this.props;
    this.name = state.name;
    this.email = state.email;
    this.avatar = state.avatar;
    this.address = state.address;

    const token = localStorage.getItem("user");
    if (!token && state.isLogin === false) {
      return <Redirect to="/" />;
    }
    return (
      <>
        {/*//             <!-- Dashboard Content*/}
        {/*// ================================================== -->*/}
        <div className="dashboard-content-container" data-simplebar>
          <div className="dashboard-content-inner">
            {/*// <!-- Dashboard Headline -->*/}
            <div className="dashboard-headline">
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
            <div className="row">
              {/*// <!-- Dashboard Box -->*/}
              <div className="col-xl-12">
                <div className="dashboard-box margin-top-0">
                  {/*// <!-- Headline -->*/}
                  <div className="headline">
                    <h3>
                      <i className="icon-material-outline-account-circle" /> My
                      Account
                    </h3>
                  </div>

                  <div className="content with-padding padding-bottom-0">
                    <div className="row ">
                      <div className="col-auto">
                        <div
                          className="avatar-wrapper"
                          data-tippy-placement="bottom"
                          title="Change Avatar"
                        >
                          <img
                            className="profile-pic"
                            src={state.avatar}
                            alt="Avatar"
                          />
                          <div className="upload-button" />
                          <input
                            className="file-upload"
                            type="file"
                            accept="image/*"
                          />
                        </div>
                      </div>

                      <div className="col">
                        <div className="row">
                          <div className="col-xl-6">
                            <div className="submit-field">
                              <h5>Name</h5>
                              <input
                                type="text"
                                className="with-border"
                                defaultValue={state.name}
                                onChange={event =>
                                  (this.name = event.target.value)
                                }
                              />
                            </div>
                          </div>

                          <div className="col-xl-6">
                            {/*// <!-- Account Type -->*/}
                            <div className="submit-field">
                              <h5>Account Type</h5>
                              <div className="account-type">
                                <div>
                                  <input
                                    type="radio"
                                    name="account-type-radio"
                                    id="freelancer-radio"
                                    className="account-type-radio"
                                    checked
                                  />
                                  <label
                                    form="freelancer-radio"
                                    className="ripple-effect-dark"
                                  >
                                    <i className="icon-material-outline-account-circle" />
                                    {state.accountType}
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-xl-6">
                            <div className="submit-field">
                              <h5>Email</h5>
                              <input
                                type="text"
                                className="with-border"
                                value={state.email}
                              />
                            </div>
                          </div>

                            <div className="col-xl-6">
                                <div className="submit-field">
                                    <h5>Address</h5>
                                    <input
                                        type="text"
                                        className="with-border"
                                        defaultValue={state.address}
                                        onChange={event =>
                                            (this.address = event.target.value)
                                        }
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
              <div className="col-xl-12">
                <div id="test1" className="dashboard-box">
                  {/*// <!-- Headline -->*/}
                  <div className="headline">
                    <h3>
                      <i className="icon-material-outline-lock" /> Password &
                      Security
                    </h3>
                  </div>

                  <div className="content with-padding">
                    <div className="row">
                      <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Current Password</h5>
                          <input
                            type="password"
                            className="with-border"
                            onChange={event =>
                              (this.CurrentPassword = event.target.value)
                            }
                          />
                        </div>
                      </div>

                      <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>New Password</h5>
                          <input
                            type="password"
                            className="with-border"
                            onChange={event =>
                              (this.NewPassword = event.target.value)
                            }
                          />
                        </div>
                      </div>

                      <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Repeat New Password</h5>
                          <input
                            type="password"
                            className="with-border"
                            onChange={event =>
                              (this.ConfirmPassword = event.target.value)
                            }
                          />
                        </div>
                      </div>

                      <div className="col-xl-12">
                        <div className="checkbox">
                          <input type="checkbox" id="two-step" checked />
                          <label form="two-step">
                            <span className="checkbox-icon" /> Enable Two-Step
                            Verification via Email
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*// <!-- Button -->*/}
              <div className="col-xl-12">
                <button
                  className="button ripple-effect big margin-top-30"
                  onClick={() => {
                    // console.log("mmmm", [
                    //   state.idTutor,
                    //   state.id,
                    //   this.name,
                    //   state.avatar,
                    //   state.accountType,
                    //   this.address,
                    //   this.bio,
                    //   skillsArray,
                    //   this.hourlyRate,
                    //   this.tagLine,
                    //   token
                    // ]);
                    this.saveChanges(token);
                  }}
                >
                  Save Changes
                </button>
              </div>
            </div>
            {/*// <!-- Row / End -->*/}
          </div>
          {/*// <!-- Spacer -->*/}
          <div class="margin-top-70" />
          {/*// <!-- Spacer / End-->*/}
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
    email: state.UserReducer.currentUser.email,
    address: state.UserReducer.currentUser.address
  };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchCurrentUser: token => {
            dispatch(getCurrentUserRequest(token));
        },
        // updateUser: (
        //     id,
        //     user_id,
        //     name,
        //     picture,
        //     type,
        //     address,
        //     bio,
        //     skills,
        //     pricePerHour,
        //     tagline,
        //     token
        // ) => {
        //     dispatch(
        //         updateUserRequest(
        //             id,
        //             user_id,
        //             name,
        //             picture,
        //             type,
        //             address,
        //             bio,
        //             skills,
        //             pricePerHour,
        //             tagline,
        //             token
        //         )
        //     );
        // },
        // updatePassword: (id, email, currentPass, newPass) => {
        //     dispatch(updatePasswordRequest(id, email, currentPass, newPass));
        // }
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountStudent);
