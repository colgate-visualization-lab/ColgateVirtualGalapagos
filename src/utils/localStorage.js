const LocalStorage = {}

LocalStorage.get = key => {
    return localStorage.getItem(key)
}
LocalStorage.set = (key, value) => {
    return localStorage.setItem(key, value)
}
LocalStorage.remove = key => {
    return localStorage.removeItem(key)
}

/**
 User functions
**/

LocalStorage.setUser = (user) => {
    LocalStorage.set("email", user.email)
    LocalStorage.set("username", user.username)
    LocalStorage.set("id", user.id)
}

LocalStorage.getUser = () => {
    const email = LocalStorage.get("email")
    const username = LocalStorage.get("username")
    const id = LocalStorage.get("id")
    return {email, username, id}
}

LocalStorage.removeUser = () => {
    LocalStorage.remove("email")
    LocalStorage.remove("username")
    LocalStorage.remove("id")
}

/**
 Token functions
**/

LocalStorage.setToken = (token) => {
    LocalStorage.set("token", token)
}

LocalStorage.getToken = () => {
    const token = LocalStorage.get("token")
    return token 
}

LocalStorage.removeToken = () => {
    LocalStorage.remove("token")
}

export default LocalStorage