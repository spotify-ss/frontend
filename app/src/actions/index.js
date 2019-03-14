import * as authActions from './auth';
import * as sharedActions from './shared';
import * as thumbActions from './thumb';
import * as trackActions from './track';

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

// Declaring this stretch for now

// export const GET_USER_FIT_START = 'GET_USER_FIT_START';
// export const GET_USER_FIT_SUCCESS = 'GET_USER_FIT_SUCCESS';

// export const gettingUserFit = (target, page = 0) => dispatch => {
//   dispatch({ type: GET_USER_FIT_START });
//   return axios
//     .post('https://spotify-ss-backend.herokuapp.com/api/get_user_fit', {
//       target,
//       'page-number': page
//     })
//     .then(res => {
//       console.log(res);
//       dispatch({ type: GET_USER_FIT_SUCCESS, payload: res.data });
//     })
//     .catch(err => dispatch({ type: ERROR, payload: err }));
// };
