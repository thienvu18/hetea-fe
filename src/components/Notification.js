import React from "react";
import { Link } from "react-router-dom";

const Notification = () => {
  return (
    <div>
      <li className="notifications-not-read">
        <Link to="/dashboard-manage-candidates">
          <span className="notification-icon">
            <i className="icon-material-outline-group" />
          </span>
          <span className="notification-text">
            <strong>Michael Shannah</strong> applied for a job{" "}
            <span className="color">Full Stack Software Engineer</span>
          </span>
        </Link>
      </li>
    </div>
  );
};
export default Notification;
