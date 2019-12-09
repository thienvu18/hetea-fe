import React from "react";
import { Link } from "react-router-dom";
import Notification from "./Notification";
import Message from "./Message";

const RightSideMenuLogin = (props) => {
    const {avatar,name, role}=props;
    return (
        <div>
            {/*// <!-- Right Side Content / End -->*/}
            <div className="right-side">
                {/*// <!--  User Notifications -->*/}
                <div className="header-widget hide-on-mobile">
                    {/*// <!-- Notifications -->*/}
                    <div className="header-notifications">
                        {/*// <!-- Trigger -->*/}
                        <div className="header-notifications-trigger">
                            <a href="/#">
                                <i className="icon-feather-bell" />
                                <span>4</span>
                            </a>
                        </div>

                        {/*// <!-- Dropdown -->*/}
                        <div className="header-notifications-dropdown">
                            <div className="header-notifications-headline">
                                <h4>Notifications</h4>
                                <button
                                    className="mark-as-read ripple-effect-dark"
                                    title="Mark all as read"
                                    data-tippy-placement="left"
                                >
                                    <i className="icon-feather-check-square" />
                                </button>
                            </div>

                            <div className="header-notifications-content">
                                <div className="header-notifications-scroll" data-simplebar>
                                    <ul>
                                        {/*// <!-- Notification -->*/}
                                        <Notification />

                                        {/*// <!-- Notification -->*/}
                                        <Notification />

                                        {/*// <!-- Notification -->*/}
                                        <Notification />

                                        {/*// <!-- Notification -->*/}
                                        <Notification />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*// <!-- Messages -->*/}
                    <div className="header-notifications">
                        <div className="header-notifications-trigger">
                            <a className="/#">
                                <i className="icon-feather-mail" />
                                <span>3</span>
                            </a>
                        </div>

                        {/*// <!-- Dropdown -->*/}
                        <div className="header-notifications-dropdown">
                            <div className="header-notifications-headline">
                                <h4>Messages</h4>
                                <button
                                    className="mark-as-read ripple-effect-dark"
                                    title="Mark all as read"
                                    data-tippy-placement="left"
                                >
                                    <i className="icon-feather-check-square" />
                                </button>
                            </div>

                            <div className="header-notifications-content">
                                <div className="header-notifications-scroll" data-simplebar>
                                    <ul>
                                        {/*// <!-- Message Notification-->*/}
                                        <Message />

                                        {/*// <!-- Message Notification -->*/}
                                        <Message />

                                        {/*// <!-- Message Notification -->*/}
                                        <Message />
                                    </ul>
                                </div>
                            </div>

                            <Link
                                to="/dashboard-messages"
                                className="header-notifications-button ripple-effect button-sliding-icon"
                            >
                                View All Messages
                                <i className="icon-material-outline-arrow-right-alt" />
                            </Link>
                        </div>
                    </div>
                </div>
                {/*// <!--  User Notifications / End -->*/}

                {/*// <!-- User Menu -->*/}
                <div className="header-widget">
                    {/*// <!-- Messages -->*/}
                    <div className="header-notifications user-menu">
                        <div className="header-notifications-trigger">
                            <a href="/#">
                                <div className="user-avatar status-online">
                                    <img src={avatar} alt="avatar" />
                                </div>
                            </a>
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
                                        {name} <span>{role}</span>
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
                                    <Link to="/dashboard-settings">
                                        <i className="icon-material-outline-settings" /> Settings
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/index-logged-out">
                                        <i className="icon-material-outline-power-settings-new" />{" "}
                                        Logout
                                    </Link>
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
