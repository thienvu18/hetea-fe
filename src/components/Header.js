import React from 'react';
import logo from '../images/logo3.png';
import { Link } from 'react-router-dom';
import RightSideMenuLogout from './RightSideMenuLogout';
import RightSideMenuLogin from './RightSideMenuLogin';
import { connect } from 'react-redux';
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
		this.accountType = 'tutor';
		this.newEmail = '';
		this.newPassword = '';
		this.passwordConfirm = '';
	}

	register = () => {
		const state = this.props;
		if (this.newPassword === this.passwordConfirm)
			return state.doRegister(
				this.newEmail,
				this.newPassword,
				this.accountType
			);

		return alert('Password not match');
	};

	registerBySocial = (service, token) => {
		const state = this.props;
		return state.doRegisterBySocial(service, token);
	};

	render() {
		const state = this.props;

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
										<img src={logo} alt="Logo" />
									</Link>
								</div>
							</div>
							{/* <!-- Left Side Content / End --> */}

							{/* <!-- Right Side Content / End --> */}
							{state.isLogin ? (
								<RightSideMenuLogin />
							) : (
								<RightSideMenuLogout
									type={type => (this.accountType = type)}
									email={event => {
										this.email = event.target.value;
									}}
									password={event => {
										this.password = event.target.value;
									}}
									login={() =>
										state.doLogin(this.email, this.password)
									}
									newEmail={event => {
										this.newEmail = event.target.value;
									}}
									newPassword={event => {
										this.newPassword = event.target.value;
									}}
									passwordConfirm={event => {
										this.passwordConfirm =
											event.target.value;
									}}
									register={() => this.register()}
									registerBySocial={this.registerBySocial}
								/>
							)}
							{/* <!-- Right Side Content / End --> */}
						</div>
					</div>
					{/* <!-- Header / End --> */}
				</header>
				<div class="clearfix" />
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		isLogin: state.AuthenticationReducer.isLogin,
		msgErr: state.AuthenticationReducer.msgErr,
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
