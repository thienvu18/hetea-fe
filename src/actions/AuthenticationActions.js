import axios from "axios";
import userConstants from "../constants/UserConstants";

function doRegister(email, password, type) {
  const res = axios({
    method: "POST",
    url: "https://hetea.herokuapp.com/users",
    data: {
      access_token: "x2eejgTfSBPP0aRqsFQreyPw8SNGWFUL",
      email: email,
      password: password,
      type: type
    }
  }).catch(err => {
    return err;
  });
  return res;
}

function doRegisterTutor(user_id) {
  const res = axios({
    method: "POST",
    url: "https://hetea.herokuapp.com/tutors",
    data: {
      access_token: "x2eejgTfSBPP0aRqsFQreyPw8SNGWFUL",
      user_id: user_id
    }
  }).catch(err => {
    return err;
  });
  return res;
}

function doRegisterStudent(user_id) {
  const res = axios({
    method: "POST",
    url: "https://hetea.herokuapp.com/tutees",
    data: {
      access_token: "x2eejgTfSBPP0aRqsFQreyPw8SNGWFUL",
      user_id: user_id
    }
  }).catch(err => {
    return err;
  });
  return res;
}
function doGoogleRegister(token) {
  const res = axios({
    method: "POST",
    url: "https://hetea.herokuapp.com/auth/google",
    data: {
      access_token: token
    }
  }).catch(err => {
    return err;
  });
  return res;
}

function doFBRegister(token) {
  const res = axios({
    method: "POST",
    url: "https://hetea.herokuapp.com/auth/facebook",
    data: {
      access_token: token
    }
  }).catch(err => {
    return err;
  });
  return res;
}

export const registerAction = res => {
  return {
    type: userConstants.REGISTER,
    payload: {
      res
    }
  };
};

export const registerRequest = (email, password, type) => {
  return dispatch => {
    return doRegister(email, password, type).then(user => {
      console.log("register", user);
      if (user.request.status === 201) {
        if (type === "tutor") {
          doRegisterTutor(user.data.user.id);
          dispatch(registerAction(user));
        }
        if (type === "tutee") {
          doRegisterStudent(user.data.user.id);
          dispatch(registerAction(user));
        }
      }
    });
  };
};

export const registerSocialRequest = (service, token) => {
  return dispatch => {
    if (service === "google") {
      return doGoogleRegister(token).then(res => {
        console.log(res);
        dispatch(registerAction(res));
      });
    } else {
      return doFBRegister(token).then(res => {
        dispatch(registerAction(res));
      });
    }
  };
};

function login(email, password) {
  const hash = btoa(`${email}:${password}`);
  const res = axios({
    method: "POST",
    url: "https://hetea.herokuapp.com/auth",
    headers: {
      Authorization: `Basic ${hash}`
    },
    data: {
      access_token: "x2eejgTfSBPP0aRqsFQreyPw8SNGWFUL"
    }
  }).catch(err => {
    return err;
  });
  return res;
}
export const loginAction = res => {
  return {
    type: userConstants.LOGIN,
    payload: {
      res
    }
  };
};
export const loginRequest = (email, password) => {
  return dispatch => {
    return login(email, password).then(res => {
      console.log("login", res);
      dispatch(loginAction(res));
    });
  };
};
export const clear = () => {
  return {
    type: userConstants.REFRESH
  };
};

export const logout = () => {
  return {
    type: userConstants.LOGOUT
  };
};

export const fogotPasswordAction = () => {
  return {
    type: userConstants.FORGOT_PASSWORD,
    payload: {}
  };
};
