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