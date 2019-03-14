import * as actions from '../actions'

import {averagePerObjectProperty as getTaste} from '../helpers'

const initialState = {
  authenticating: false,
  userData: {},
  userMusicTaste: null,
  isAuthed: localStorage.getItem('authToken') ? true : false, //check if client is already authenticated
  error: null
}

export default (state = initialState, action) => {
  switch(action.type){
    case actions.AUTH_START:
      return {
        ...state,
        authenticating: true,
        error: null
      }
    case actions.AUTH_SUCCESS:
      localStorage.setItem('authToken', action.payload.token)
      localStorage.setItem('userID', action.payload.userID)
      localStorage.setItem('username', action.payload.username)
      return {
        ...state,
        authenticating: false,
        isAuthed: true
      }
    case actions.USER_DATA_RECEIVED:
      return {
        ...state,
        userData: action.payload,
        userMusicTaste: getTaste(action.payload.likedTracks)
      }
    case actions.LOGOUT: 
      return {
          ...state,
          isAuthed: false
      }
    case actions.ERROR:
      return {
        ...state,
        authenticating: false,
        error: action.payload       
      }
    default:
      return state
  }
}

