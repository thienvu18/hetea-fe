import React from "react";
import {clear, registerRequest} from "../actions/AuthenticationActions";
import {connect} from "react-redux";
import {
    withRouter
} from 'react-router-dom'
import Redirect from "react-router-dom/es/Redirect";
import RegisterForm from "../components/RegisterForm";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.error = 'abc';
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



    render() {
        const state = this.props;
        if (state.isRegister) {
            state.clear();
            return <Redirect to="/login"/>
        }

        return (
            <div style={{backgroundColor: '#f2f2f2'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-3 margin-top-50">

                            <div className="login-register-page" style={{
                                borderRadius: '5px',
                                padding: '50px',
                                backgroundColor: "white",
                                boxSizing: 'border-box',
                                boxShadow: '0 1px 6px rgba(57,73,76,.35)'
                            }}>
                                <RegisterForm
                                    type={type => (this.accountType = type)}
                                    error={state.msgErr}
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
                                    isRegister={state.isRegister}
                                />
                            </div>
                        </div>
                    </div>
                    {/*// <!-- Spacer -->*/}
                    <div class="margin-top-70"/>
                    {/*// <!-- Spacer / End-->*/}
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isRegister: state.AuthenticationReducer.isRegister,
        msgErr: state.AuthenticationReducer.msgErr,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        doRegister: (newEmail, newPwd, type) => {
            dispatch(registerRequest(newEmail, newPwd, type));
        },
        clear: () =>{
            dispatch(clear());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Register));
