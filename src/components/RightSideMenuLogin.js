import React from "react";
import logo from '../images/user-avatar-small-03.jpg'
import {Link} from "react-router-dom";
import Notification from "./Notification";
import Message from "./Message";

const RightSideMenuLogin = () => {
    return(
        <div>

            {/*// <!-- Right Side Content / End -->*/}
            <div class="right-side">

                {/*// <!--  User Notifications -->*/}
                <div class="header-widget hide-on-mobile">

                    {/*// <!-- Notifications -->*/}
                    <div class="header-notifications">

                        {/*// <!-- Trigger -->*/}
                        <div class="header-notifications-trigger">
                            <a href="/#"><i class="icon-feather-bell"/><span>4</span></a>
                        </div>

                        {/*// <!-- Dropdown -->*/}
                        <div class="header-notifications-dropdown">

                            <div class="header-notifications-headline">
                                <h4>Notifications</h4>
                                <button class="mark-as-read ripple-effect-dark" title="Mark all as read" data-tippy-placement="left">
                                    <i class="icon-feather-check-square"/>
                                </button>
                            </div>

                            <div class="header-notifications-content">
                                <div class="header-notifications-scroll" data-simplebar>
                                    <ul>
                                        {/*// <!-- Notification -->*/}
                                        <Notification/>

                                        {/*// <!-- Notification -->*/}
                                        <Notification/>

                                        {/*// <!-- Notification -->*/}
                                        <Notification/>

                                        {/*// <!-- Notification -->*/}
                                        <Notification/>
                                    </ul>
                                </div>
                            </div>

                        </div>

                    </div>

                    {/*// <!-- Messages -->*/}
                    <div class="header-notifications">
                        <div class="header-notifications-trigger">
                            <a href="/#"><i class="icon-feather-mail"/><span>3</span></a>
                        </div>

                        {/*// <!-- Dropdown -->*/}
                        <div class="header-notifications-dropdown">

                            <div class="header-notifications-headline">
                                <h4>Messages</h4>
                                <button class="mark-as-read ripple-effect-dark" title="Mark all as read" data-tippy-placement="left">
                                    <i class="icon-feather-check-square"/>
                                </button>
                            </div>

                            <div class="header-notifications-content">
                                <div class="header-notifications-scroll" data-simplebar>
                                    <ul>
                                        {/*// <!-- Message Notification-->*/}
                                        <Message/>

                                        {/*// <!-- Message Notification -->*/}
                                        <Message/>

                                        {/*// <!-- Message Notification -->*/}
                                        <Message/>
                                    </ul>
                                </div>
                            </div>

                            <Link to="/dashboard-messages" class="header-notifications-button ripple-effect button-sliding-icon">View All Messages<i class="icon-material-outline-arrow-right-alt"/></Link>
                        </div>
                    </div>

                </div>
                {/*// <!--  User Notifications / End -->*/}

                {/*// <!-- User Menu -->*/}
                <div class="header-widget">

                    {/*// <!-- Messages -->*/}
                    <div class="header-notifications user-menu">
                        <div class="header-notifications-trigger">
                            <a href="/#"><div class="user-avatar status-online"><img src={logo} alt="avatar"/></div></a>
                        </div>

                        {/*// <!-- Dropdown -->*/}
                        <div class="header-notifications-dropdown">

                            {/*// <!-- User Status -->*/}
                            <div class="user-status">

                                {/*// <!-- User Name / Avatar -->*/}
                                <div class="user-details">
                                    <div class="user-avatar status-online"><img src={logo} alt="avatar"/></div>
                                    <div class="user-name">
                                        Tom Smith <span>Freelancer</span>
                                    </div>
                                </div>

                                {/*// <!-- User Status Switcher -->*/}
                                <div class="status-switch" id="snackbar-user-status">
                                    <label class="user-online current-status">Online</label>
                                    <label class="user-invisible">Invisible</label>
                                    {/*// <!-- Status Indicator -->*/}
                                    <span class="status-indicator" aria-hidden="true"/>
                                </div>
                            </div>

                            <ul class="user-menu-small-nav">
                                <li><Link to="/dashboard-settings"><i class="icon-material-outline-settings"/> Settings</Link></li>
                                <li><Link to="/index-logged-out"><i class="icon-material-outline-power-settings-new"/> Logout</Link></li>
                            </ul>

                        </div>
                    </div>

                </div>
                {/*// <!-- User Menu / End -->*/}

                {/*// <!-- Mobile Navigation Button -->*/}
                <span class="mmenu-trigger">
					<button class="hamburger hamburger--collapse" type="button">
						<span class="hamburger-box">
							<span class="hamburger-inner"/>
						</span>
					</button>
				</span>

            </div>
            {/*// <!-- Right Side Content / End -->*/}
        </div>
    );
};
export default RightSideMenuLogin;