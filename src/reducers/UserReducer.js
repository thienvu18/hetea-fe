import userConstants from "../constants/UserConstants";

const initState = {
  currentUser: {
    id: "",
    idTutor: "",
    idTutee:"",
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

  listTutors: {
    tutors: [],
    all: function() {
      return this.tutors;
    },
    get: function(id) {
      const isPlayer = p => p.number === id;
      return this.tutors.find(isPlayer);
    }
  },
  generate: []
};
const doFilter = (tutors, filters) => {
  return tutors.filter(tutor => {
    return (
      tutor.address === filters.Location ||
      (tutor.pricePerHour >= filters.HourRate[0] &&
        tutor.pricePerHour <= filters.HourRate[1])
    );
  });
};
const mergeArray = (users, tutors) => {
  let user = [];
  for (let i = 0; i < users.length; i = i + 1) {
    for (let j = 0; j < tutors.length; j = j + 1) {
      if (users[i].id === tutors[j].user_id) {
        user.push({
          number: users[i].id,
          name: users[i].name,
          email: users[i].email,
          picture: users[i].picture,
          address: tutors[j].address,
          bio: tutors[j].bio,
          skills: tutors[j].skills,
          pricePerHour: tutors[j].pricePerHour,
          tagline: tutors[j].tagline,
          taughtContract: tutors[j].taughtContract
        });
      }
    }
  }


  return user;
};
const UserReducer = (state = initState, action) => {
  switch (action.type) {
    case userConstants.GET_CURRENT_USER: {
      const tmp = { ...state };
      try {
        console.log("get user");
        const user = action.payload.user.data;

        tmp.currentUser.id = user.id;
        tmp.currentUser.avatar = user.picture;
        tmp.currentUser.name = user.name;
        tmp.currentUser.accountType = user.type;
        tmp.currentUser.email = user.email;

        console.log(tmp);

        if (tmp.currentUser.accountType === "tutor") {
          const tutor = action.payload.detail.data;
          tmp.currentUser.address = tutor.address;
          tmp.currentUser.bio = tutor.bio;
          tmp.currentUser.tagLine = tutor.tagline;
          tmp.currentUser.skills = tutor.skills.slice();
          tmp.currentUser.pricePerHour = tutor.pricePerHour;
          tmp.currentUser.idTutor = tutor.id;
        }
        if (tmp.currentUser.accountType === "tutee") {
          const tutee = action.payload.detail.data;
          tmp.currentUser.address = tutee.address;
          tmp.currentUser.idTutee=tutee.id;
        }


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
    }
    case userConstants.GET_ALL: {
      console.log("get all tutors");
      try {
        const _listUsers = action.payload.users.data;
        const _listTutors = action.payload.tutors.data.rows;

        console.log("list", [_listUsers, _listTutors]);
        const tutors = mergeArray(_listUsers, _listTutors);

        state.generate = tutors;

        console.log("st.generate", state.generate);
        const listTutors = { ...state.listTutors, tutors };
        return { ...state, listTutors };
      } catch (e) {}

      return { ...state };
    }
    case userConstants.UPDATE_USER:
      return { ...state };
    case userConstants.UPDATE_PASSWORD:
      return { ...state };

    case userConstants.FILTER: {
      const tutors = doFilter(state.generate, action.payload.filters);
      const listTutors = { ...state.listTutors, tutors };
      return { ...state, listTutors };
    }
    case userConstants.CREATE_CONTRACT:{
      return {...state}
    }
    default:
      return { ...state };
  }
};
export default UserReducer;
