import userConstants from "../constants/UserConstants";
import axios from "axios";

function getCurrentUser(token) {
  const user = axios({
    method: "GET",
    url: "https://hetea.herokuapp.com/users/me",
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).catch(err => {
    return err;
  });
  return user;
}
function getCurrentTutor(user_id, token) {
  const tutor = axios({
    method: "GET",
    url: "https://hetea.herokuapp.com/tutors/me",
    headers: {
      Authorization: `Bearer ${token}`
    },
    data: {
      user_id: user_id
    }
  }).catch(err => {
    return err;
  });
  return tutor;
}

export const getCurrentUserAction = (user, tutor) => {
  return {
    type: userConstants.GET_CURRENT_USER,
    payload: {
      user,
      tutor
    }
  };
};

export const getCurrentUserRequest = token => {
  return dispatch => {
    return getCurrentUser(token).then(user => {

      console.log("user", user);
      if(user.data.type==="tutor"){
        getCurrentTutor(user.data.id, token).then(tutor => {
          console.log("tutor", tutor);
          dispatch(getCurrentUserAction(user, tutor));
        });
      }

      dispatch(getCurrentUserAction(user));
    });
  };
};

function getAllTutors() {
  const res = axios({
    method: "GET",
    url: "https://hetea.herokuapp.com/tutors",
    headers: {
      Authorization: "Bearer x2eejgTfSBPP0aRqsFQreyPw8SNGWFUL"
    }
  }).catch(err => {
    return err;
  });
  return res;
}
function getAllUsers() {
  const res = axios({
    method: "GET",
    url: "https://hetea.herokuapp.com/users",
    headers: {
      Authorization: "Bearer x2eejgTfSBPP0aRqsFQreyPw8SNGWFUL"
    }
  }).catch(err => {
    return err;
  });
  return res;
}
export const getAllTutorsAction = (users, tutors) => {
  return {
    type: userConstants.GET_ALL,
    payload: {
      users,
      tutors
    }
  };
};

export const getAllTutorsRequest = () => {
  return dispatch => {
    return getAllUsers().then(users => {
      console.log("list users", users);
      getAllTutors().then(tutors => {
        console.log("list tutors", tutors);
        dispatch(getAllTutorsAction(users, tutors));
      });
    });
  };
};

function updatePassword(id, email, currentPassword, newPassword) {
  const hash = btoa(`${email}:${currentPassword}`);
  const res = axios({
    method: "PUT",
    url: `https://hetea.herokuapp.com/users/${id}/password`,
    headers: {
      Authorization: `Basic ${hash}`
    },
    data: {
      password: newPassword
    }
  }).catch(err => {
    return err;
  });
  return res;
}
export const updatePasswordAction = res => {
  return {
    type: userConstants.UPDATE_PASSWORD,
    payload: {
      res
    }
  };
};

export const updatePasswordRequest = (
  id,
  email,
  currentPassword,
  newPassword
) => {
  return dispatch => {
    return updatePassword(id, email, currentPassword, newPassword).then(res => {
      console.log("update password", res);
      dispatch(updatePasswordAction(res));
    });
  };
};

const updateUser = async (id, name, picture, token) => {
  const res = axios({
    method: "PUT",
    url: `https://hetea.herokuapp.com/users/${id}`,
    data: {
      access_token: token,
      name: name,
      picture: picture
    }
  }).catch(err => {
    return err;
  });
  return res;
};
const updateTutor = async (
  id,
  user_id,
  address,
  bio,
  skills,
  pricePerHour,
  tagline
) => {
  const res = axios({
    method: "PUT",
    url: `https://hetea.herokuapp.com/tutors/${id}`,
    data: {
      access_token: "x2eejgTfSBPP0aRqsFQreyPw8SNGWFUL",
      user_id: user_id,
      address: address,
      bio: bio,
      skills: skills,
      pricePerHour: pricePerHour,
      tagline: tagline
    }
  }).catch(err => {
    return err;
  });
  return res;
};

export const updateUserAction = res => {
  return {
    type: userConstants.UPDATE_USER,
    payload: {
      res
    }
  };
};

export const updateUserRequest = (
  id,
  user_id,
  name,
  picture,
  type,
  address,
  bio,
  skills,
  pricePerHour,
  tagLine,
  token
) => {
  return dispatch => {
    return updateUser(user_id, name, picture, token).then(user => {
      console.log("update user", user);
      if (type === "tutor") {
        updateTutor(
          id,
          user_id,
          address,
          bio,
          skills,
          pricePerHour,
          tagLine
        ).then(tutor => {
          console.log("update tutor", tutor);
          dispatch(updateUserAction(user));
        });
      }
    });
  };
};

export const filterAction = filters => {
  return {
    type: userConstants.FILTER,
    payload: {
      filters
    }
  };
};
