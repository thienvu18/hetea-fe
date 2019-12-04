import axios from 'axios';
import userConstants  from '../constants/UserConstants';

function doRegister(email,password,type) {
    const res = axios({
        method: 'POST',
        url:'https://hetea.herokuapp.com/users',
        headers:{
            Authorization: "Bearer x2eejgTfSBPP0aRqsFQreyPw8SNGWFUL"
        },
        data:{
            email: email,
            password: password,
            type: type
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
export const registerRequest=(email,password,type)=>{
    return dispatch=>{
        return doRegister(email,password,type).then(res=>{
            console.log(res);
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

