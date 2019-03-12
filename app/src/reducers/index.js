import { combineReducers } from 'redux';
import authReducer from './authReducer';
import track from './trackReducer';
import songsReducer from './songsReducer';

export default combineReducers({
  auth: authReducer,
  track: track,
  songs: songsReducer
});