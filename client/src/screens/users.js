import {api} from './apiConfig';

/// Defines the login for the user. Since it requires a body we are passing through loginData as a variable. 
export const loginUser = async (loginData) => {
    /// Making our axios call with a post request to the auth/login endpoint to log in with loginData
    const res = await api.post('/auth/login', {authentication: loginData})
    /// Stores our token on the front it with localStorage using a key and value.
    localStorage.setItem('authToken', res.data.token)
    ///We can default our headers and assign it to be our token
    api.defaults.headers.common.authorization = `Bearer ${res.data.token}`
    /// Returns the user
    return res.data.user
}