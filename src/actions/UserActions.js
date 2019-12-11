import userConstants from "../constants/UserConstants";
import axios from "axios";

function getCurrentUser(token) {
  const res = axios({
    method: "GET",
    url: "https://hetea.herokuapp.com/users/me",
    headers:{
      Authorization: `Bearer ${token}`
    },
  }).catch(err => {
    return err;
  });
  return res;
}
export const getCurrentUserAction = res => {
  return {
    type: userConstants.GET_CURRENT_USER,
    payload: {
      res
    }
  };
};

export const getCurrentUserRequest = token => {
  return dispatch => {
    return getCurrentUser(token).then(res => {
      console.log(res);
      dispatch(getCurrentUserAction(res));
    });
  };
};

function getAllTutors(token) {
  const res = axios({
    method: "GET",
    url: "https://hetea.herokuapp.com/users",
    headers:{
      Authorization: `Bearer ${token}`
    },
  }).catch(err => {
    return err;
  });
  return res;
}
export const getAllTutorsAction = res => {
  return {
    type: userConstants.GET_ALL,
    payload: {
      res
    }
  };
};

export const getAllTutorsRequest = token => {
  return dispatch => {
    return getAllTutors(token).then(res => {
      console.log(res);
      dispatch(getAllTutorsAction(res));
    });
  };
};

function updatePassword(id,email,currentPassword,newPassword) {
  const hash = btoa(`${email}:${currentPassword}`);
  const res = axios({
    method: "PUT",
    url: "https://hetea.herokuapp.com/users",
    headers:{
      Authorization: `Bearer ${hash}`
    },
    data:{
      password: newPassword
    }
  }).catch(err => {
    return err;
  });
  return res;
}
export const updatePasswordAction = res => {
  return {
    type: userConstants.GET_ALL,
    payload: {
      res
    }
  };
};

export const updatePasswordRequest = (id,email,currentPassword,newPassword) => {
  return dispatch => {
    return updatePassword(id,email,currentPassword,newPassword).then(res => {
      console.log(res);
      dispatch(updatePasswordAction(res));
    });
  };
};

function updateUser(id,name,picture,token) {
  const res = axios({
    method: "PUT",
    url: `https://hetea.herokuapp.com/users/:${id}`,
    data: {
      access_token: token,
      name: name,
      picture:picture,
    }
  }).catch(err => {
    return err;
  });
  return res;
}
export const updateUserAction = res => {
  return {
    type: userConstants.GET_ALL,
    payload: {
      res
    }
  };
};

export const updateUserRequest = (id,name,picture,token) => {
  return dispatch => {
    return updateUser(id,name,picture,token).then(res => {
      console.log(res);
      dispatch(updateUserAction(res));
    });
  };
};

export const filterAction=(filters)=>{
  return{
    type: userConstants.FILTER,
    payload:{
      filters,
    }
  }
};

