import * as authActions from './auth';
import * as sharedActions from './shared';
import * as thumbActions from './thumb';
import * as trackActions from './track';
// ----- ACTIONS ------

// export const NEGATE_UPTHUMB_START = 'NEGATE_UPTHUMB_START';
// export const NEGATE_UPTHUMB_SUCCESS = 'NEGATE_UPTHUMB_SUCCESS';

// export const NEGATE_DOWNTHUMB_START = 'NEGATE_DOWNTHUMB_START';
// export const NEGATE_DOWNTHUMB_SUCCESS = 'NEGATE_DOWNTHUMB_SUCCESS';

// ----- ACTION CREATORS -----

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

