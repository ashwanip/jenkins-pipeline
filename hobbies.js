const hobbies = ["sports", "drwing", "reading", "sleeping"];

exports.getHobbies = () => {
    return hobbies;
}

exports.getHobby = (id) => {
    if(id<1 || id>hobbies.length) {
        return null;
    }
    return hobbies[id-1];
}