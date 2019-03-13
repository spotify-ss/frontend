import { combineReducers } from 'redux';
import authReducer from './authReducer';
import track from './trackReducer';
import tracksReducer from './tracksReducer';

export default combineReducers({
  auth: authReducer,
  track: track,
  tracks: tracksReducer
});