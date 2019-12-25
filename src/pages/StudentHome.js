import React from "react";
import TutorCard from "../components/TutorCard";
import { Link, useRouteMatch, Route } from "react-router-dom";
import Message from "./Message";
import AccountStudent from "./AccountStudent";
import AccountSettings from "./AccountTutor";

const SidebarLink = ({ label, icon, to, activeWhenExact }) => {
  let match = useRouteMatch({
    path: to,
    exact: activeWhenExact
  });

  return (
    <li className={match ? "active" : ""}>
      <Link to={to}>
        <i className={icon} />
        {label}
      </Link>
    </li>
  );
};

export default class StudentHome extends React.Component {
  render() {
    return (
      <div className="dashboard-container">
        <div className="dashboard-sidebar">
          <div className="dashboard-sidebar-inner" data-simplebar>
            <div className="dashboard-nav-container">
              {/*<!-- Responsive Navigation Trigger -->*/}
              <Link to="/" className="dashboard-responsive-nav-trigger">
                <span className="hamburger hamburger--collapse">
                  <span className="hamburger-box">
                    <span className="hamburger-inner" />
                  </span>
                </span>
                <span className="trigger-title">Dashboard Navigation</span>
              </Link>

              {/*<!-- Navigation -->*/}
              <div className="dashboard-nav">
                <div className="dashboard-nav-inner">
                  <ul data-submenu-title="Start">
                    <SidebarLink
                      label="Messages"
                      to="/student/message"
                      icon="icon-material-outline-question-answer"
                      activeWhenExact={false}
                    />

                  </ul>

                  <ul data-submenu-title="Account">
                    <li>
                      <Link to="/student/account">
                        <i className="icon-material-outline-settings" />{" "}
                        Settings
                      </Link>
                    </li>
                    <li>
                      <Link to="/index-logged-out">
                        <i className="icon-material-outline-power-settings-new" />
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/*<!-- Navigation / End -->*/}
            </div>
          </div>
        </div>
          <div className="dashboard-content-container" data-simplebar="">
              <div className="dashboard-content-inner">
                  {/*<!-- Dashboard Headline -->*/}
                  <Route path="/student/message" component={Message} />
                  <Route path="/student/account" component={AccountStudent} />

                  {/*<!-- Footer -->*/}
                  <div className="dashboard-footer-spacer"/>
                  {/*<!-- Footer / End -->*/}
              </div>
          </div>

      </div>
    );
  }
}
