import {api} from './apiConfig';

/// Defines the login for the user 
export const loginUser = async (loginData) => {
    /// Making our axios call with a post request to the auth/login endpoint to log in with loginData
    const res = await api.post('/auth/login', {authentication: loginData})
    /// Stores our token on the front it with localStorage using a key and value.
    localStorage.setItem('authToken', res.data.token)
    ///Defaults our headers and assign it to be our token
    api.defaults.headers.common.authorization = `Bearer ${res.data.token}`
    /// Returns the user
    return res.data.user
}

///Signing up a user
export const signupUser = async (signupData) => {
    ///Making an axios call to run the create methond
    const res = await api.post('/users', signupData)
    /// Stores our token on the front it with localStorage using a key and value.
    localStorage.setItem('authToken', res.data.token)
     ///Defaults our headers and assign it to be our token
    api.defaults.headers.common.authorization = `Bearer ${res.data.token}`
    ///Returns the signup
    return res.data
}

///Verifying a user 
export const verifyUser = async () => {
    /// Assiging a toekn from localStorage
    const token = localStorage.getItem('authToken')
    // if token exist
    if (token) {
        /// sends the token 
        api.defaults.headers.common.authorization = `Bearer ${token}`
        ///Making a call to the backend verify route
        const res = await api.get('/auth/verify')
        ///Returns reponse
        return res.data
    } else {
        return false 
    }
}

///Getting all users
export const getAllUsers = async () => {
    ///Making api call for all users
    const res = await api.get('/users')
    /// Returns all users
    return res.data
}

///Getting one user
export const getOneUser = async (user_id) => {
    ///Making api call for one user with their id 
    const res = await api.get(`/users/${user_id}`)
    /// Returns specific user 
    return res.data
}

///Updating a user 
export const updateUser = async (user_id, updateData) => {
    /// Axios call with a put request 
    const res = await api.put(`/users/${user_id}`, updateData)
    ///Return the updated data
    return res.data
}

///Deleting a user
export const deleteUser = async (user_id) => {
    /// Calling axios call for deletion 
    const res = await api.delete(`/users/${user_id}`)
    /// returing the delete request
    return res.data
}