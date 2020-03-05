
let usersList = [];

const createUser = (user) => {
    user.id = usersList.length + 1;
    usersList.push(user);
    console.table(usersList);
}

const getUserById = (id) => {
    return usersList.find(x => x.id == id );
}

export  {
    createUser,
    getUserById
}