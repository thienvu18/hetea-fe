import userConstants from "../constants/UserConstants";
import data from "../data";

const initState = {
  currentUser: {
    id: "",
    idTutor: "",
    avatar: "",
    name: "",
    accountType: "",
    email: "",
    address: "",
    bio: "",
    tagLine: "",
    skills: [],
    pricePerHour: 0
  },
  listTutors: data,
  generate: []
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
        const user = action.payload.user.data;
        const tutor = action.payload.tutor.data;
        tmp.currentUser.id = user.id;
        tmp.currentUser.avatar = user.picture;
        tmp.currentUser.name = user.name;
        tmp.currentUser.accountType = user.type;
        tmp.currentUser.email = user.email;
        tmp.currentUser.address = tutor.address;
        tmp.currentUser.bio = tutor.bio;
        tmp.currentUser.tagLine = tutor.tagline;
        tmp.currentUser.skills = tutor.skills.slice();
        console.log("tmp.currentUser.skills", tmp.currentUser.skills);
        tmp.currentUser.pricePerHour = tutor.pricePerHour;
        tmp.currentUser.idTutor = tutor.id;
      } catch (e) {
        tmp.currentUser.id = "";
        tmp.currentUser.avatar = "";
        tmp.currentUser.name = "";
        tmp.currentUser.accountType = "";
        tmp.currentUser.email = "";
        tmp.currentUser.address = "";
        tmp.currentUser.bio = "";
        tmp.currentUser.tagLine = "";
        tmp.currentUser.skills = [];
        tmp.currentUser.pricePerHour = 0;
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
        st.generate = data.tutors.slice();
        console.log("st.generate", st.generate);
      } catch (e) {}
      return st;
    case userConstants.UPDATE_USER:
      return { ...state };
    case userConstants.UPDATE_PASSWORD:
      return { ...state };

    case userConstants.FILTER: {
      const tutors = doFilter(state.generate, action.payload.filters);
      const listTutors = { ...state.listTutors, tutors };
      return { ...state, listTutors };
    }
    default:
      return { ...state };
  }
};
export default UserReducer;
