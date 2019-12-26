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
function getCurrentTutee(token) {
  const tutee = axios({
    method: "GET",
    url: "https://hetea.herokuapp.com/tutees/me",
    headers: {
      Authorization: `Bearer ${token}`
    },
  }).catch(err => {
    return err;
  });
  return tutee;
}
export const getCurrentUserAction = (user, detail) => {
  return {
    type: userConstants.GET_CURRENT_USER,
    payload: {
      user,
      detail
    }
  };
};
export const getCurrentUserRequest = token => {
  return dispatch => {
    return getCurrentUser(token).then(user => {
      console.log("get current user", user);
      try{
        if (user.data.type === "tutor") {
          getCurrentTutor(user.data.id, token).then(tutor => {
            console.log("tutor", tutor);
            dispatch(getCurrentUserAction(user, tutor));
          });
        }

        if (user.data.type === "tutee") {
          getCurrentTutee(token).then(tutee => {
            console.log("tutee", tutee);
            dispatch(getCurrentUserAction(user, tutee));
          });
        }

      }catch (e) {
        
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
      getAllTutors().then(tutors => {
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
const updateTutor = (
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
const updateTutee = (id, user_id, address,token) => {
  const res = axios({
    method: "PUT",
    url: `https://hetea.herokuapp.com/tutees/${id}`,
    headers: {
      Authorization: `Bearer ${token}`
    },

    data: {
      user_id: user_id,
      address: address
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
    {id,
  user_id,
  name,
  picture,
  type,
  address,
  bio,
  skills,
  pricePerHour,
  tagLine,
  token}
) => {
  return dispatch => {
    return updateUser(user_id, name, picture, token).then(user => {
      console.log("update user", user);
      console.log(type);
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
      if (type === "tutee") {
        console.log(id, user_id, address, token);
        updateTutee(id, user_id, address, token).then(tutee => {


          console.log("update tutee", tutee);
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

export const createContractAction = res => {
  return {
    type: userConstants.CREATE_CONTRACT,
    payload: {
      res
    }
  };
};
const createContract = (
  token,
  tutor,
  tutee,
  hours,
  price,
  startDate,
  endDate
) => {
  const res = axios({
    method: "POST",
    url: `https://hetea.herokuapp.com/contracts`,
    data: {
      access_token: token,
      token: token,
      tutor: tutor,
      tutee: tutee,
      hours: hours,
      price: price,
      startDate: startDate,
      endDate: endDate
    }
  }).catch(err => {
    return err;
  });
  return res;
};

export const createContractRequest = (
  token,
  tutor,
  tutee,
  hours,
  price,
  startDate,
  endDate
) => {
  return dispatch => {
    return createContract(
      token,
      tutor,
      tutee,
      hours,
      price,
      startDate,
      endDate
    ).then(res => {
      console.log("createContract", res);
      dispatch(createContractAction(res));
    });
  };
};

function getUser(user_id) {
  const user = axios({
    method: "GET",
    url: `https://hetea.herokuapp.com/users/${user_id}`,

  }).catch(err => {
    return err;
  });
  return user;

}

function getAllContracts(token) {
  const contracts = axios({
    method: "GET",
    url: "https://hetea.herokuapp.com/contracts",
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).catch(err => {
    return err;
  });
  return contracts;

}
export const getAllContractsAction = (res) => {
  return {
    type: userConstants.GET_ALL_CONTRACT,
    payload: {
      res
    }
  };
};

export const getAllContractsRequest = (token) => {
  return dispatch => {
    return getAllContracts(token).then(async res => {
      let tmp=res.data.rows;
      console.log("tmp",tmp)
      for(let i=0;i<res.data.count;i+=1){
      const tutee = await  getUser(tmp[i].tutee);
        console.log("res",tutee);
        tmp[i].tuteeName=tutee.data.name;
        tmp[i].tuteeAvatar= tutee.data.picture;

      }
      dispatch(getAllContractsAction(tmp));
    })}
  };

function OnclickUpdateContract(data, token) {
  const res = axios
      .put(
          `https://hetea.herokuapp.com/contracts/status/${data.id}`,
          {
            access_token: token,
            status: data.status
          }
      )
      .catch(error => {
        return error;
      });
  return res;
}

export const UpdateContract = (data, token, res) => {
  return {
    type: userConstants.updateContract,
    data: { token, res }
  };
};

export const UpdateContractRequest = (data, token) => {
  return dispatch => {
    return OnclickUpdateContract(data, token).then(res => {
      console.log("update status",res);
      dispatch(UpdateContract(data, token, res));
    });
  };
}

