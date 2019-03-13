import axios from 'axios'

import {ERROR} from './index'

export const VALID_TOKEN = 'VALID_TOKEN'

export const SEARCH_TRACK_START = 'SEARCH_TRACK_START'
export const SEARCH_TRACK_SUCCESS = 'SEARCH_TRACK_SUCCESS'

export const PLAY = 'PLAY'
export const REACTED = 'REACTED'

export const GET_FEATURES= 'GET_FEATURES'
export const FEATURES_RECEIVED= 'FEATURES_RECEIVED'

// get from sppotify console
const spotifyToken = localStorage.getItem('access_token')

export const testToken = () => dispatch => {
    axios.get(`https://api.spotify.com/v1/search?q=abba&type=track`, {
      headers: {'Authorization': 'Bearer ' + spotifyToken}
    }).then(res => {
        dispatch({
            type: VALID_TOKEN,
        })
    }).catch(err => {
        dispatch({
            type: ERROR,
            payload: err.response.data.error.message
        })
    })
}

export const searchTrack = (searchTerm) => dispatch => {
    dispatch({
        type: SEARCH_TRACK_START
    })

    axios.get(`https://api.spotify.com/v1/search?q=${searchTerm}&type=track`, {
      headers: {'Authorization': 'Bearer ' + spotifyToken}
    }).then(res => {
        dispatch({
            type: SEARCH_TRACK_SUCCESS,
            payload: res.data.tracks.items
        })
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


export const getFeatures = (trackData) => dispatch => {
    dispatch({
        type: GET_FEATURES,
        payload: trackData
    })
    axios.get(`https://api.spotify.com/v1/audio-features/${trackData.id}`, {
        headers: {
            Authorization: `Bearer ${spotifyToken}`
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
 * Takes meh, like, dislike 
 */
export const reacted = (reaction, trackId) => {
   return {
       type: REACTED,
       payload: {
           reaction: reaction,
           track: trackId
       }
   }
}