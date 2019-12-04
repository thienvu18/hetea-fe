import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/user-avatar-small-03.jpg";

const Message = () => {
    return (
        <div>
            <li className="notifications-not-read">
                <Link to="/dashboard-messages">
                    <span className="notification-avatar status-online"><img src={logo} alt="avatar"/></span>
                    <div className="notification-text">
                        <strong>David Peterson</strong>
                        <p className="notification-msg-text">Thanks for reaching out. I'm quite busy right now on
                            many...</p>
                        <span className="color">4 hours ago</span>
                    </div>
                </Link>
            </li>
        </div>
    );
};
export default Message;