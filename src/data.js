const data = {
    tutors: [
        { number: 1, name: "Ben Blocker" , avatar: "https://www.w3schools.com/howto/img_avatar.png",location: "quan 7", hourlyRated:"35"},
        { number: 2, name: "Dave Defender",avatar: "https://www.w3schools.com/howto/img_avatar.png",location: "quan 7", hourlyRated:"20"},
        { number: 3, name: "Sam Sweeper",avatar: "https://www.w3schools.com/howto/img_avatar.png",location: "quan 7", hourlyRated:"20"},
        { number: 4, name: "Matt Midfielder",avatar: "https://www.w3schools.com/howto/img_avatar.png",location: "quan 7", hourlyRated:"20"},
        { number: 5, name: "William Winger",avatar: "https://www.w3schools.com/howto/img_avatar.png",location: "quan 7", hourlyRated:"20"},
        { number: 6, name: "Fillipe Forward",avatar: "https://www.w3schools.com/howto/img_avatar.png",location: "quan 7", hourlyRated:"20"}
    ],
    all: function() { return this.tutors},
    get: function(id) {
        const isPlayer = p => p.number === id;
        return this.tutors.find(isPlayer)
    }
};

export default data;