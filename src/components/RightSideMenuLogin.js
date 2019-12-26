import React from "react";
import { Link } from "react-router-dom";

const RightSideMenuLogin = props => {
  const { avatar, name, role, logout } = props;
  return (
    <div>
      {/*// <!-- Right Side Content / End -->*/}
      <div className="right-side">
        {/*// <!--  User Notifications -->*/}
        <div className="header-widget hide-on-mobile">
          {/*// <!-- Messages -->*/}
          <div className="header-notifications">
            <Link
              to={role === "tutor" ? "/tutor/message" : "/student/message"}
              className="header-notifications-trigger"
            >
              <i className="icon-feather-mail" />
              <span>3</span>
            </Link>
          </div>
        </div>
        {/*// <!--  User Notifications / End -->*/}

        {/*// <!-- User Menu -->*/}
        <div className="header-widget">
          {/*// <!-- Messages -->*/}
          <div className="header-notifications user-menu">
            <div className="header-notifications-trigger">
              <Link to="/tutor/message">
                <div className="user-avatar status-online">
                  <img src={avatar} alt="avatar" />
                </div>
              </Link>
            </div>

            {/*// <!-- Dropdown -->*/}
            <div className="header-notifications-dropdown">
              {/*// <!-- User Status -->*/}
              <div className="user-status">
                {/*// <!-- User Name / Avatar -->*/}
                <div className="user-details">
                  <div className="user-avatar status-online">
                    <img src={avatar} alt="avatar" />
                  </div>
                  <div className="user-name">
                    <span> {name}</span>
                  </div>
                </div>

                {/*// <!-- User Status Switcher -->*/}
                <div className="status-switch" id="snackbar-user-status">
                  <label className="user-online current-status">Online</label>
                  <label className="user-invisible">Invisible</label>
                  {/*// <!-- Status Indicator -->*/}
                  <span className="status-indicator" aria-hidden="true" />
                </div>
              </div>

              <ul className="user-menu-small-nav">
                <li>
                  <Link
                    to={
                      role === "tutor" ? "/tutor/dashboard" : "/student/account"
                    }
                  >
                    <i className="icon-material-outline-settings" /> Dashboard
                  </Link>
                </li>
                <li>
                  <button onClick={() => logout()}>
                    <i className="icon-material-outline-power-settings-new" />{" "}
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*// <!-- User Menu / End -->*/}
      </div>
      {/*// <!-- Right Side Content / End -->*/}
    </div>
  );
};
export default RightSideMenuLogin;
