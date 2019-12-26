import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";

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
const Sidebar = () => {
  return (
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
                  label="Dashboard"
                  to="/tutor/dashboard"
                  icon="icon-material-outline-dashboard"
                  activeWhenExact={true}
                />
                <SidebarLink
                  label="Messages"
                  to="/tutor/message"
                  icon="icon-material-outline-question-answer"
                  activeWhenExact={false}
                />
              </ul>

              <ul data-submenu-title="Organize and Manage">
                <li>
                  <a href="/">
                    <i className="icon-material-outline-business-center" /> Jobs
                  </a>
                  <ul>
                    <li>
                      <Link to="/dashboard-manage-jobs">
                        Manage Jobs <span className="nav-tag">3</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/dashboard-manage-candidates">
                        Manage Candidates
                      </Link>
                    </li>
                    <li>
                      <Link to="/dashboard-post-a-job">Post a Job</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/">
                    <i className="icon-material-outline-assignment" /> Tasks
                  </a>
                  <ul>
                    <li>
                      <Link to="/dashboard-manage-tasks">
                        Manage Tasks <span className="nav-tag">2</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/dashboard-manage-bidders">Manage Bidders</Link>
                    </li>
                    <li>
                      <Link to="/dashboard-my-active-bids">
                        My Active Bids <span className="nav-tag">4</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/dashboard-post-a-task">Post a Task</Link>
                    </li>
                  </ul>
                </li>
              </ul>

              <ul data-submenu-title="Account">

                <SidebarLink
                    label="Settings"
                    to="/tutor/account"
                    icon="icon-material-outline-settings"
                    activeWhenExact={false}
                />

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
  );
};
export default Sidebar;
