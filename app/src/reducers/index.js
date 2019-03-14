import { combineReducers } from 'redux';
import authReducer from './authReducer';
import track from './trackReducer';
import tracksReducer from './tracksReducer';
import thumbReducer from './thumbReducer';

export default combineReducers({
  auth: authReducer,
  track: track,
  tracks: tracksReducer,
  thumbs: thumbReducer
});
