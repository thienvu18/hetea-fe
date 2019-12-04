import userConstants from "../constants/UserConstants";

const initState = {
    token: "",
    isLogin: false,
    isRegister: false,
    msgErr: "",
    accountType:"",

};

const AuthenticationReducer = (state = initState, action) => {
    switch (action.type) {
        case userConstants.REGISTER:
            return { ...state };

        case userConstants.LOGIN:

            console.log("login");
            const tmp = { ...state };
            console.log(action.payload.res.data.token);

            try {
                const { token } = action.payload.res.data;
                tmp.isLogin = true;
                tmp.msgErr = '';
                tmp.token=token;
                tmp.accountType="student";
            }catch (e) {
                tmp.isLogin = false;
                tmp.msgErr = '';
                tmp.token='';
                tmp.accountType='';
            }
            return tmp;

        case userConstants.LOGOUT:
            return { ...state };

        default:
            return { ...state };
    }
};

export default AuthenticationReducer;