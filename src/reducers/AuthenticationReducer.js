import userConstants from "../constants/UserConstants";

const initState = {
  token: "",
  isLogin: false,
  isRegister: false,
  msgErr: "",
};

const AuthenticationReducer = (state = initState, action) => {
  if (localStorage.getItem("user")) {
    state.isLogin = true;
  }
  switch (action.type) {
    case userConstants.REGISTER:
      console.log("register");
      const registerState = { ...state };

      try {
        if (action.payload.res.request.status === 201) {
          registerState.isRegister = true;
        }
        if (action.payload.res.request.status === 409) {
          registerState.msgErr = "Email already registered";
        }
      } catch (e) {}

      return registerState;

    case userConstants.LOGIN:
      console.log("login");
      const tmp = { ...state };

      try {
        tmp.token = action.payload.res.data.token;
        tmp.msgErr = "";
        tmp.isLogin = true;
        localStorage.setItem("user", tmp.token);
      } catch (e) {
        if (action.payload.res.request.status === 401) {
          tmp.msgErr = "Something went wrong";
        }
        if (action.payload.res.request.status === 400) {
          tmp.msgErr = "Invalid email or password";
        } else {
          tmp.isLogin = false;
          tmp.msgErr = "";
          tmp.token = "";
        }
      }
      return tmp;
    case userConstants.REFRESH:
      return initState;
    case userConstants.LOGOUT:
      localStorage.removeItem("user");
      return initState;
    default:
      return { ...state };
  }
};

export default AuthenticationReducer;
