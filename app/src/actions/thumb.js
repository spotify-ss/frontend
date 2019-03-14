import axiosWithAuth from '../components/axiosWithAuth';
import { ERROR } from './shared';

export const DOWNTHUMB_TRACK_START = 'DOWNTHUMB_TRACK_START';
export const DOWNTHUMB_TRACK_SUCCESS = 'DOWNTHUMB_TRACK_SUCCESS';

export const UPTHUMB_TRACK_START = 'UPTHUMB_TRACK_START';
export const UPTHUMB_TRACK_SUCCESS = 'UPTHUMB_TRACK_SUCCESS';

export const upthumbTrack = (trackId, userId) => dispatch => {
  dispatch(
    {
      type: UPTHUMB_TRACK_START,
      payload: trackId
    }
  );
  return axiosWithAuth()
    .post('https://spotify-ss-backend.herokuapp.com/api/users/add/positive_track', {
      'user_id': userId,
      'track_id': trackId
    })
    .then(res => {
      console.log(res);
      dispatch(
        { type: UPTHUMB_TRACK_SUCCESS }
      );
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ERROR, payload: err });
    });
};

export const downthumbTrack = (trackId, userId) => dispatch => {
  dispatch(
    {
      type: DOWNTHUMB_TRACK_START,
      payload: trackId
    }
  );
  return axiosWithAuth()
    .post('https://spotify-ss-backend.herokuapp.com/api/users/add/negative_track', {
      'user_id': userId,
      'track_id': trackId
    })
    .then(res => {
      console.log(res);
      dispatch(
        { type: DOWNTHUMB_TRACK_SUCCESS }
      );
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ERROR, payload: err });
    });
};

export const negateUpthumbTrack = id => dispatch => {
  // type: UPTHUMB_TRACK,
  // payload: id
};
export const negateDownthumbTrack = id => dispatch => {
  // type: DOWNTHUMB_TRACK,
  // payload: id
};

