import userConstants from "../constants/UserConstants";
import data from "../data";

const initState = {
  currentUser: {
    id: "",
    avatar: "",
    name: "",
    accountType: "",
    email: ""
  },
  listTutors: data
};

const doFilter = (tutors, filters) => {
  return tutors.filter(tutor => {
    return (
      tutor.location === filters.Location &&
      tutor.hourlyRated >= filters.HourRate[0] &&
      tutor.hourlyRated <= filters.HourRate[1]
    );
  });
};
const UserReducer = (state = initState, action) => {
  switch (action.type) {
    case userConstants.GET_CURRENT_USER:
      const tmp = { ...state };
      try {
        console.log("get user");
        const user = action.payload.res.data;
        tmp.currentUser.id = user.id;
        tmp.currentUser.avatar = user.picture;
        tmp.currentUser.name = user.name;
        tmp.currentUser.accountType = user.accountType;
        tmp.currentUser.email = user.email;
      } catch (e) {
        tmp.currentUser.id = "";
        tmp.currentUser.avatar = "";
        tmp.currentUser.name = "";
        tmp.currentUser.accountType = "";
        tmp.currentUser.email = "";
      }
      return tmp;
    case userConstants.GET_ALL:
      const st = { ...state };
      console.log("get all tutors");
      try {
        const list = action.payload.res.data;
        if (list) {
          for (let i = 0; i < list.length; i += 1) {
            st.listTutors.tutors.push({
              number: list[1].id,
              name: list[1].name,
              avatar: list[1].picture,
              email: list[1].email
            });
          }
        }
        console.log(st.listTutors);
      } catch (e) {}
      return st;
    case userConstants.UPDATE_USER:
      return { ...state };
    case userConstants.FILTER: {
      const tutors = doFilter(state.listTutors.tutors, action.payload.filters);
      const listTutors = { ...state.listTutors, tutors };
      return { ...state, listTutors };
    }
    default:
      return { ...state };
  }
};
export default UserReducer;
