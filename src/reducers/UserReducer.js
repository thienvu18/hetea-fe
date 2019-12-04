import userConstants from "../constants/UserConstants";

const initState = {
    type:'',
    email:'',
    password:'',
    img:'',
};

const UserReducer = (state = initState, action) => {
    switch (action.type) {
        case userConstants.GET_CURRENT_USER:
            return { ...state };
        default:
            return { ...state };
    }
};

export default UserReducer;