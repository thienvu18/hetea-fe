import React from 'react';
import {Link} from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import Button from "@material-ui/core/Button";

const LoginForm = (props) => {
    const {
        email,
        password,
        error,
        login,
		registerBySocial,
		clear
    } = props;
    return (
        <div>
            {/* <!--  Welcome text --> */}
            <div className="welcome-text">
                <h3>We are glad to see you again!</h3>
                <span>Do not have an account?
					<Link to="/register" onClick={()=>clear()}>
						Sign Up!
					</Link>
                </span>
            </div>

            {/* <!--  Form --> */}
            <form method="post" id="login-form">
                <div className="input-with-icon-left">
                    <i className="icon-material-baseline-mail-outline"/>
                    <input
                        type="text"
                        className="input-text with-border"
                        name="emailaddress"
                        id="emailaddress"
                        placeholder="Email Address"
                        required
                        onChange={event => {
                            email(event);
                        }}
                    />
                </div>

                <div className="input-with-icon-left">
                    <i className="icon-material-outline-lock"/>
                    <input
                        type="password"
                        className="input-text with-border"
                        name="password"
                        id="password"
                        placeholder="Password"
                        required
                        onChange={event => {
                            password(event);
                        }}
                    />
                </div>
                <span style={{fontStyle: "italic", color: "red"}}>{error}</span>
				<br/>
                <Button  className="forgot-password">
                    Forgot Password?
                </Button>
            </form>

            {/*<!-- Button -->*/}
            <button
                className="button full-width button-sliding-icon ripple-effect margin-top-10"
                type="button"
                form="login-form"
                onClick={() => login()}
            >
                Log In
                <i className="icon-material-outline-arrow-right-alt"/>
            </button>

            {/*<!-- Social Login -->*/}
            <div className="social-login-separator">
                <span>or</span>
            </div>
            <div className="social-login-buttons">
                <FacebookLogin
                    appId="549481505833136"
                    // autoLoad
                    isDisabled={false}
                    callback={a =>
                        registerBySocial(
                            'facebook',
                            a.accessToken
                        )
                    }
                    render={renderProps => (
                        <button
                            onClick={renderProps.onClick}
                            className="facebook-login ripple-effect"
                        >
                            <i className="icon-brand-facebook-f"/>{' '}
                            Log In via Facebook
                        </button>
                    )}
                />
                <GoogleLogin
                    clientId="429405468090-n1l6hmc8uq26j4h91qgr7m459vnv3qqh.apps.googleusercontent.com"
                    render={renderProps => (
                        <button
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                            className="google-login ripple-effect"
                        >
                            <i className="icon-brand-google-plus-g"/>{' '}
                            Log In via Google+
                        </button>
                    )}
                    onSuccess={a =>
                        registerBySocial(
                            'google',
                            a.accessToken
                        )
                    }
                    onFailure={() => {
                    }}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        </div>
    );
};
export default LoginForm;
