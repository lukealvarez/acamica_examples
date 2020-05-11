
const createUser = (user) => {

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