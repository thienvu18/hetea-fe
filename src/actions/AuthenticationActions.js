import axios from 'axios';
import userConstants  from '../constants/UserConstants';

function doRegister(username, email,password,gender,birthday) {
    const res = axios({
        method: 'POST',
        url:'https://caroapi-1612799.herokuapp.com/users/register',
        data:{
            username,
            email,
            gender,
            birthday,
            password,
        }
    })
        .catch(err=>{
            return err;
        });
    return res;
}
export const registerAction=(res)=>{
    return{
        type: userConstants.REGISTER,
        res
    }
};
export const registerRequest=(username, email,gender,birthday, password)=>{
    return dispatch=>{
        return doRegister(username, email,gender,birthday, password).then(res=>{
            // console.log(res.request.response);
            dispatch(registerAction(res))
        })
    }
};

function login(email, password) {
    const hash = btoa(`${email}:${password}`);
    const res = axios({
        method: 'POST',
        url: 'https://hetea.herokuapp.com/auth',
        headers: {
            Authorization: `Basic ${hash}`
        },
        data: {
            access_token:"x2eejgTfSBPP0aRqsFQreyPw8SNGWFUL"
        }
    }).catch(err => {
        return err;
    });
    return res;
}
export const loginAction = ( res) => {
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
            console.log(res);
            dispatch(loginAction(res));
        });
    };
};


export const logout = () => {
    return {
        type: userConstants.LOGOUT
    };
};

function getUser(user) {
    const res = axios({
        method: 'GET',
        url: 'https://caroapi-1612799.herokuapp.com/',
        headers: { Authorization: `Bearer ${user}` },
    }).catch(err => {
        return err;
    });
    return res;
}
export const getUserAction = (res) => {
    return {
        type: userConstants.GET_CURRENT_USER,
        res,
    };
};
export const getUserRequest = token => {
    return dispatch => {
        return getUser(token).then(res => {
            dispatch(getUserAction(res));
        });
    };
};
