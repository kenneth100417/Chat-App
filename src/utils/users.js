const users = []

const addUser = ({id, username, room}) =>{
    //clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //validate the data
    if(!username || !room){
        return{
            error: 'Username and Room are required!'
        }
    }

    //check for existing user
    const existingUser = users.find((user) =>{
        return user.room === room && user.username === username
    })

    //Validate Username
    if(existingUser){
        return{
            error: 'Username is in use!'
        }
    }

    //Store user
    const user = {id, username, room}
    users.push(user)
    return{user}
}

const removeUser = (id) =>{
    const index = users.findIndex((user) => user.id === id)

    if(index !== -1){
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) =>{
     return users.find((user) => user.id === id)
}

const getUsersInRoom = (room) =>{
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}
// addUser({
//     id: 22,
//     username: 'Andrew',
//     room: 'Room'
// })

// addUser({
//     id: 42,
//     username: 'Mike',
//     room: 'Room'
// })

// addUser({
//     id: 32,
//     username: 'Andrew',
//     room: 'anotherRoom'
// })

// const user = getUser(424)
// console.log(user)

// const userList = getUsersInRoom('anotherRoom')
// console.log(userList)



  