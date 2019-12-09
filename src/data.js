const data = {
    tutors: [
        { number: 1, name: "Ben Blocker" , avatar: "https://www.w3schools.com/howto/img_avatar.png"},
        { number: 2, name: "Dave Defender",avatar: "https://www.w3schools.com/howto/img_avatar.png"},
        { number: 3, name: "Sam Sweeper",avatar: "https://www.w3schools.com/howto/img_avatar.png"},
        { number: 4, name: "Matt Midfielder",avatar: "https://www.w3schools.com/howto/img_avatar.png"},
        { number: 5, name: "William Winger",avatar: "https://www.w3schools.com/howto/img_avatar.png"},
        { number: 6, name: "Fillipe Forward",avatar: "https://www.w3schools.com/howto/img_avatar.png"}
    ],
    all: function() { return this.tutors},
    get: function(id) {
        const isPlayer = p => p.number === id;
        return this.tutors.find(isPlayer)
    }
};

export default data;