import React from 'react';
import {Link} from "react-router-dom";

const RightSideMenuLogout=()=> {

    return (
        <div>
            {/*// <!-- Right Side Content / End -->*/}
            <div class="right-side">
                <div class="header-widget">
                    <Link
                        to="/login"
                        class="log-in-button"
                    >
                        <i class="icon-feather-log-in"/>{' '}
						<span>Log In / Register</span>
                    </Link>
                </div>
                {/*// <!-- Right Side Content / End -->*/}
            </div>
            <div className="clearfix"/>
        </div>
    );
};

export default RightSideMenuLogout;
