import React from "react";
import { Link } from "react-router-dom";

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
                <li className="active">
                  <Link to="/dashboard">
                    <i className="icon-material-outline-dashboard" />
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard-messages">
                    <i className="icon-material-outline-question-answer" />
                    Messages
                    <span className="nav-tag">2</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard-bookmarks">
                    <i className="icon-material-outline-star-border" />
                    Bookmarks
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard-reviews">
                    <i className="icon-material-outline-rate-review" /> Reviews
                  </Link>
                </li>
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
                <li>
                  <Link to="/dashboard-settings">
                    <i className="icon-material-outline-settings" /> Settings
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
  );
};
export default Sidebar;
