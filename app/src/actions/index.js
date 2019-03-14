import * as authActions from './auth';
import * as sharedActions from './shared';
import * as thumbActions from './thumb';
import * as trackActions from './track';
// ----- ACTIONS ------

// export const NEGATE_UPTHUMB_START = 'NEGATE_UPTHUMB_START';
// export const NEGATE_UPTHUMB_SUCCESS = 'NEGATE_UPTHUMB_SUCCESS';

export const DOWNTHUMB_TRACK_START = 'DOWNTHUMB_TRACK_START';
export const DOWNTHUMB_TRACK_SUCCESS = 'DOWNTHUMB_TRACK_SUCCESS';

// export const NEGATE_DOWNTHUMB_START = 'NEGATE_DOWNTHUMB_START';
// export const NEGATE_DOWNTHUMB_SUCCESS = 'NEGATE_DOWNTHUMB_SUCCESS';

// ----- ACTION CREATORS -----

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

// export const getPositiveTracks = userId => dispatch => {
//   dispatch({ type: GET_POSITIVE_TRACKS })
//   return axiosWithAuth()
//   .get('https://spotify-ss-backend.herokuapp.com/api/users/positive_tracks')
//     .then(res => {
//       console.log('Positive Tracks:');
//       console.log(res);
//     })
//     .catch(err => {
//       console.log(err);
//     })
// }


// Track Actions----------------------------------------------------------------------------------------------------------------------

export const PLAY = 'PLAY';

export const play = trackId => {
  return {
    type: PLAY,
    payload: trackId
  };
};

export default {
  ...authActions,
  ...sharedActions,
  ...thumbActions,
  ...trackActions,
  PLAY,
  play
};

