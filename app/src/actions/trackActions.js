import axios from 'axios'

import {ERROR} from './index'

export const VALID_TOKEN = 'VALID_TOKEN'
export const NO_TOKEN = 'NO_TOKEN'


export const SEARCH_TRACK_START = 'SEARCH_TRACK_START'
export const SEARCH_TRACK_SUCCESS = 'SEARCH_TRACK_SUCCESS'

export const GET_TRACKS_START = 'GET_TRACKS_START'
export const GET_TRACKS_SUCCESS = 'GET_TRACKS_SUCCESS'

export const PLAY = 'PLAY'

export const REACTED = 'REACTED'
export const REACTION_SUCCESS = 'REACTION_SUCCESS'

export const GET_FEATURES= 'GET_FEATURES'
export const FEATURES_RECEIVED= 'FEATURES_RECEIVED'


export const testToken = (accessToken) => dispatch => {
    console.log(accessToken)
    if(accessToken === null){
        dispatch({
            type: NO_TOKEN
        })
    }else{
        axios.get(`https://api.spotify.com/v1/search?q=abba&type=track`, {
        headers: {'Authorization': 'Bearer ' + accessToken}
        }).then(res => {
            dispatch({
                type: VALID_TOKEN,
                payload: accessToken
            })
        }).catch(err => {
            dispatch({
                type: ERROR,
                payload: err.response.data.error.message
            })
        })
    }
}

export const searchTrack = (searchTerm, accessToken) => dispatch => {
    dispatch({
        type: SEARCH_TRACK_START
    })

    axios.get(`https://spotify-ss-backend.herokuapp.com/api/track/${searchTerm}`, {
      headers: {'Authorization': 'Bearer ' + accessToken}
    }).then(res => {
        const ids = res.data.map(track => track.track_id).join(',');

        console.log(ids)

        axios.get(`https://api.spotify.com/v1/tracks?ids=${ids}`, {
            headers: {'Authorization': 'Bearer ' + accessToken}})
            .then(spot => {

                const tracks = res.data.map((track, i) => {
                    return {...spot.data.tracks[i], ...track}
                })

                dispatch({
                    type: SEARCH_TRACK_SUCCESS,
                    payload: tracks
                })


            })
            .catch(err => {
                dispatch({
                    type: ERROR,
                    payload: err
                })
            })

    }).catch(err => {
        dispatch({
            type: ERROR,
            payload: err
        })
    })
}

/**
 * 
 * @param {string} ids 
 * @param {string} accessToken 
 */
export const getTracks = (ids, accessToken) => dispatch => {
    dispatch({
        type: GET_TRACKS_START
    })

    return axios.get(`https://api.spotify.com/v1/tracks?ids=${ids}`, {
      headers: {'Authorization': 'Bearer ' + accessToken}
    }).then(res => {
        dispatch({
            type: GET_TRACKS_SUCCESS,
            payload: res.data.tracks.items
        })
        return res
    }).catch(err => {
        dispatch({
            type: ERROR,
            payload: err.response.data.error.message
        })
    })
}

export const play = (trackId) => {
    return {
        type: PLAY,
        payload: trackId
    }
}


export const getFeatures = (trackData, accessToken) => dispatch => {
    dispatch({
        type: GET_FEATURES,
        payload: trackData
    })
    axios.get(`https://api.spotify.com/v1/audio-features/${trackData.id}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }).then(res => {
        dispatch({
            type: FEATURES_RECEIVED,
            payload: res.data  
        })
    }).catch(err => {
        dispatch({
            type: ERROR,
            payload: err.response.data.error
        })
    })
}

/**
 * Takes  method(add/delete) reaction(positive_track/negative_track) trackId, userId, authToken
 */
export const reacted = (reaction, method, trackId) => dispatch => {
    dispatch({
        type: REACTED
    })

    axios.post(`https://spotify-ss-backend.herokuapp.com/api/users/${method}/${reaction}`, {
        headers: {
            Authorization: localStorage.getItem('authToken')
        },
        user_id: Number(localStorage.getItem('userID')),
        track_id: trackId
    }).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })

   return {
       type: REACTED,
       payload: {
           reaction: reaction,
           track: trackId,
           method: method
       }
   }
}