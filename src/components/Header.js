import React from 'react';
import logo from '../images/hetea.png';
import {Link} from 'react-router-dom';
import RightSideMenuLogout from './RightSideMenuLogout';
import RightSideMenuLogin from './RightSideMenuLogin';
import {connect} from 'react-redux';
import {
    loginRequest,
    registerRequest,
    registerSocialRequest,
} from '../actions/AuthenticationActions';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.email = '';
        this.password = '';
        this.error = 'abc';
        this.accountType = 'tutor';
        this.newEmail = '';
        this.newPassword = '';
        this.passwordConfirm = '';
    }

    checkInput = () => {
        if (this.email === '' || this.password === '' || this.newEmail === '' || this.newPassword === '') {
            this.error = "Invalid email or password";
            return false;
        }
        return true;
    };

    login = () => {
        const state = this.props;

        if (this.email !== '' && this.password !== '') {
            state.doLogin(this.email, this.password);
        }
    };

    register = () => {
        const state = this.props;
        if (this.checkInput) {
            if (this.newPassword === this.passwordConfirm)
                return state.doRegister(
                    this.newEmail,
                    this.newPassword,
                    this.accountType
                );
        }
        return alert('Password not match');
    };

    render() {
        const state = this.props;

        console.log(state);
        return (
            <div>
                <header
                    id="header-container"
                    class="fullwidth dashboard-header not-sticky"
                >
                    {/* <!-- Header --> */}
                    <div id="header">
                        <div class="container">
                            {/* <!-- Left Side Content --> */}
                            <div class="left-side">
                                {/* <!-- Logo --> */}
                                <div id="logo">
                                    <Link to="/">
                                        <img src={logo} alt="Logo"/>
                                    </Link>
                                </div>
                            </div>
                            {/* <!-- Left Side Content / End --> */}

                            {/* <!-- Right Side Content / End --> */}

							{state.isLogin ? (
								<RightSideMenuLogin
									avatar={state.avatar}
									name={state.username}
									role={state.accountType}
								/>
								) : (
                                <RightSideMenuLogout/>
                            )}
                            {/* <!-- Right Side Content / End --> */}
                        </div>
                    </div>
                    {/* <!-- Header / End --> */}
                </header>
                <div class="clearfix"/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLogin: state.AuthenticationReducer.isLogin,
        msgErr: state.AuthenticationReducer.msgErr,
		username: state.AuthenticationReducer.username,
		accountType: state.AuthenticationReducer.accountType,
		avatar: state.AuthenticationReducer.avatar
	};
};

const mapDispatchToProps = dispatch => {
    return {
        doLogin: (email, pwd) => {
            dispatch(loginRequest(email, pwd));
        },
        doRegister: (newEmail, newPwd, type) => {
            dispatch(registerRequest(newEmail, newPwd, type));
        },
        doRegisterBySocial: (service, token) => {
            dispatch(registerSocialRequest(service, token));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
