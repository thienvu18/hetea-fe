import React from "react";

const RegisterForm = (props) => {
    const {
        type,
        newEmail,
        newPassword,
        error,
        passwordConfirm,
        register,
    } = props;

    return (
        <div>
            {/* <!--  Welcome text --> */}
            <div className="welcome-text">
                <h3 style={{'font-size': '26px'}}>
                    Let create your account!
                </h3>
            </div>

            {/*<!-- Account Type -->*/}
            <div className="account-type">
                <div>
                    <input
                        type="radio"
                        name="account-type-radio"
                        id="freelancer-radio"
                        className="account-type-radio"
                        checked
                        onClick={() => type('tutor')}
                    />
                    <label
                        htmlFor="freelancer-radio"
                        className="ripple-effect-dark"
                    >
                        <i className="icon-material-outline-account-circle"/>{' '}
                        Tutor
                    </label>
                </div>

                <div>
                    <input
                        type="radio"
                        name="account-type-radio"
                        id="employer-radio"
                        className="account-type-radio"
                        onClick={() => type('tutee')}
                    />
                    <label
                        htmlFor="employer-radio"
                        className="ripple-effect-dark"
                    >
                        <i className="icon-material-outline-business-center"/>{' '}
                        Student
                    </label>
                </div>
            </div>

            {/* <!--  Form --> */}
            <form method="post" id="register-account-form">
                <div className="input-with-icon-left">
                    <i className="icon-material-baseline-mail-outline"/>
                    <input
                        type="text"
                        className="input-text with-border"
                        name="emailaddress-register"
                        id="emailaddress-register"
                        placeholder="Email Address"
                        required
                        onChange={event => {
                            newEmail(event);
                        }}
                    />
                </div>

                <div
                    className="input-with-icon-left"
                    title="Should be at least 8 characters long"
                    data-tippy-placement="bottom"
                >
                    <i className="icon-material-outline-lock"/>
                    <input
                        type="password"
                        className="input-text with-border"
                        name="password-register"
                        id="password-register"
                        placeholder="Password"
                        required
                        onChange={event => {
                            newPassword(event);
                        }}
                    />
                </div>

                <div className="input-with-icon-left">
                    <i className="icon-material-outline-lock"/>
                    <input
                        type="password"
                        className="input-text with-border"
                        name="password-repeat-register"
                        id="password-repeat-register"
                        placeholder="Repeat Password"
                        required
                        onChange={event => {
                            passwordConfirm(event);
                        }}
                    />
                </div>
                <span style={{fontStyle: "italic", color: "red"}}>{error}</span>
            </form>

            {/*<!-- Button -->*/}
            <button
                className="button full-width button-sliding-icon ripple-effect margin-top-10"
                type="button"
                form="login-form"
                onClick={() => register()}
            >
                Register
                <i className="icon-material-outline-arrow-right-alt"/>
            </button>

        </div>
  );
};
export default RegisterForm;
