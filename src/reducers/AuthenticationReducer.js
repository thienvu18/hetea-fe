import userConstants from "../constants/UserConstants";

const initState = {
    token: "",
    isLogin: false,
    isRegister: false,
    msgErr: "",
    accountType: "",
    avatar: "",
    username: "",
};

const AuthenticationReducer = (state = initState, action) => {
    switch (action.type) {
        case userConstants.REGISTER:
            console.log("register");
            const registerState = {...state};

            try {
                if (action.payload.res.request.status === 201) {
                    registerState.isRegister = true;
                }
                if (action.payload.res.request.status === 409) {
                    registerState.msgErr = 'Email already registered';
                }
            } catch (e) {

            }

            return registerState;

        case userConstants.LOGIN:

            console.log("login");
            const tmp = {...state};

            try {
                const {token} = action.payload.res.data;
                tmp.isLogin = true;
                tmp.msgErr = '';
                tmp.token = token;
                tmp.accountType = action.payload.res.data.user.type;
                tmp.username = action.payload.res.data.user.name;
                tmp.avatar = action.payload.res.data.user.picture;

            } catch (e) {
                tmp.isLogin = false;
                tmp.msgErr = 'Invalid email or password';
                tmp.token = '';
                tmp.accountType = '';
                tmp.username = '';
                tmp.avatar = '';

            }
            return tmp;
        case userConstants.REFRESH:
            return initState;
        case userConstants.LOGOUT:
            return {...state};

        default:
            return {...state};
    }
};

export default AuthenticationReducer;