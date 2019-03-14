import axios from 'axios'

import {ERROR} from './index'
export const AUTH_START = 'AUTH_START'
export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const LOGOUT = 'LOGOUT'

export const USER_DATA_RECEIVED = 'USER_DATA_RECEIVED'

const baseUrl = 'https://spotify-ss-backend.herokuapp.com/api'

export const authenticate = (username, password) => dispatch => {
    dispatch({
        type: AUTH_START
    })
    axios.post(`${baseUrl}/users/login`, {
        username: username,
        password: password
    }).then(res => {
        
        dispatch({
            type: AUTH_SUCCESS,
            payload: res.data
        })
    }).catch(err => {
        dispatch({
            type: ERROR,
            payload: err.response.data.error
        })
    })
}

export const signup = (username, password) => dispatch => {
    dispatch({
        type: AUTH_START
    })
    axios.post(`${baseUrl}/users/register`, {
        username: username,
        password: password
    }).then(res => {
        dispatch({
            type: AUTH_SUCCESS,
            payload: res.data
        })
    }).catch(err => {
        dispatch({
            type: ERROR,
            payload: err.response.data.error
        })
    })
}

export const getUserData = () => async dispatch => {
    let userData = {}
    let error = null

    let authToken = localStorage.getItem('authToken')

    await axios.get('https://spotify-ss-backend.herokuapp.com/api/users/positive_tracks', {
        headers: {
            Authorization: authToken
        }
    }).then(res => {
        console.log('getuserdata: ', res)
        userData.likedTracks = res.data
    }).catch(err => {
        err = err.response.data
    })

    if(error) return
    dispatch({
        type: USER_DATA_RECEIVED,
        payload: userData
    })


}

export const logout = () => {
    localStorage.removeItem('authToken')
    return {
        type: LOGOUT 
    }
}