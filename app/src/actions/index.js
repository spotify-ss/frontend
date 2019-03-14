import axios from 'axios';
import axiosWithAuth from '../components/axiosWithAuth';


// ----- ACTIONS ------

export const LOGOUT = 'LOGOUT';

export const TOGGLE_SEARCH_ARTIST = 'TOGGLE_SEARCH_ARTIST';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';

export const TRACK_SEARCH_START = 'TRACK_SEARCH_START';
export const TRACK_SEARCH_SUCCESS = 'TRACK_SEARCH_SUCCESS';

export const ARTIST_SEARCH_START = 'ARTIST_SEARCH_START';
export const ARTIST_SEARCH_SUCCESS = 'ARTIST_SEARCH_SUCCESS';

export const GET_ARTIST_TRACKS_START = 'GET_ARTIST_START';
export const GET_ARTIST_TRACKS_SUCCESS = 'GET_ARTIST_SUCCESS';

export const GET_CLOSEST_TRACKS_START = 'GET_CLOSEST_TRACK_START';
export const GET_CLOSEST_TRACKS_SUCCESS = 'GET_CLOSEST_TRACK_SUCCESS';

export const GET_CLOSEST_VALUES_START = 'GET_CLOSEST_VALUES_START';
export const GET_CLOSEST_VALUES_SUCCESS = 'GET_CLOSEST_VALUES_SUCCESS';

export const SEARCH_TERM_CHANGED = 'SEARCH_TERM_CHANGED';

export const UPTHUMB_TRACK_START = 'UPTHUMB_TRACK_START';
export const UPTHUMB_TRACK_SUCCESS = 'UPTHUMB_TRACK_SUCCESS';

// export const GET_POSITIVE_TRACKS = 'GET_POSITIVE_TRACKS';

// export const NEGATE_UPTHUMB_START = 'NEGATE_UPTHUMB_START';
// export const NEGATE_UPTHUMB_SUCCESS = 'NEGATE_UPTHUMB_SUCCESS';

export const DOWNTHUMB_TRACK_START = 'DOWNTHUMB_TRACK_START';
export const DOWNTHUMB_TRACK_SUCCESS = 'DOWNTHUMB_TRACK_SUCCESS';

// export const NEGATE_DOWNTHUMB_START = 'NEGATE_DOWNTHUMB_START';
// export const NEGATE_DOWNTHUMB_SUCCESS = 'NEGATE_DOWNTHUMB_SUCCESS';

export const ERROR = 'ERROR';


// ----- ACTION CREATORS -----

export const searchTermChanged = term => ({
  type: SEARCH_TERM_CHANGED,
  payload: term
});

export const gettingClosestValues = (target, page = 0) => dispatch => {
  dispatch({ type: GET_CLOSEST_VALUES_START });
  return axios
    .post('https://spotify-ss-backend.herokuapp.com/api/get_closest_values', {
      target,
      'page-number': page
    })
    .then(res => {
      console.log(res);
      dispatch({ type: GET_CLOSEST_TRACKS_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: ERROR, payload: err }));
};

export const gettingClosestTracks = (trackId, page = 0) => dispatch => {
  dispatch({ type: GET_CLOSEST_TRACKS_START });
  return axios
    .post('https://spotify-ss-backend.herokuapp.com/api/get_closest_tracks', {
      'track-id': trackId,
      'page-number': page
    })
    .then(res => {
      console.log(res);
      dispatch({ type: GET_CLOSEST_TRACKS_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: ERROR, payload: err }));
};

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

export const toggleSearchArtist = () => {
  return {
    type: TOGGLE_SEARCH_ARTIST
  };
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

export const gettingArtistTracks = id => dispatch => {
  dispatch({ type: GET_ARTIST_TRACKS_START });
  return axios
    .get('https://spotify-ss-backend.herokuapp.com/api/get_artist_tracks', {
      params: {
        id
      }
    })
    .then(res => {
      console.log(res);
      dispatch({ type: GET_ARTIST_TRACKS_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: ERROR, payload: err }));
};

export const searchingByArtists = searchTerms => dispatch => {
  console.log('Searching by Artist action creator');
  console.log('SearchTerms:');
  console.log(searchTerms);
  console.log('SearchingByArtists:');
  console.log(searchingByArtists);
  dispatch({
    type: TRACK_SEARCH_START,
    payload: {
      searchingByArtists: true,
      searchTerms
    }
  });
  // .get('https://spotify-ss-backend.herokuapp.com/api/artist_search', {
  //   params: {
  //     terms
  //   }
  // })
  return axios
    .get('https://spotify-ss-backend.herokuapp.com/api/artists/artist/YG')
    .then(res => {
      console.log(res);
      dispatch({ type: TRACK_SEARCH_SUCCESS, payload: res.data.tracks });
    })
    .catch(err => dispatch({ type: ERROR, payload: err }));
};

export const searchingTracks = searchTerms => dispatch => {
  dispatch({
    type: TRACK_SEARCH_START,
    payload: {
      searchingByArtists: false,
      searchTerms
    }
  });
  // .get(
  //   `https://spotify-ss-backend.herokuapp.com/api/track?track_name=${terms}`
  // )
  return axios
    .get('https://spotify-ss-backend.herokuapp.com/api/artists/artist/YG')
    .then(res => {
      dispatch({ type: TRACK_SEARCH_SUCCESS, payload: res.data.tracks });
    })
    .catch(err => {
      console.log(err.response);
      return dispatch({ type: ERROR, payload: err });
    });
};

export const loggingIn = (login, password) => dispatch => {
  dispatch({
    type: LOGIN_START
  });
  return axios
    .post('https://spotify-ss-backend.herokuapp.com/api/users/login', {
      username: login,
      password: password
    })
    .then(res => {
      console.log(res);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userId', res.data.userID);
      // (function() {
      //   const token = res.data.token;
      //   if (token) {
      //     axios.defaults.headers.common['Authorization'] = token;
      //   } else {
      //     axios.defaults.headers.common['Authorization'] = null;
      //     /*if setting null does not remove `Authorization` header then try
      //      delete axios.defaults.headers.common['Authorization'];
      //    */
      //   }
      // })();
      dispatch({
        type: LOGIN_SUCCESS
      });
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: err
      });
    });
};

export const loggingOut = () => {
  localStorage.clear();
  return {
    type: LOGOUT
  };
};

export const signingUp = (login, password) => dispatch => {
  dispatch({
    type: SIGNUP_START
  });
  return axios
    .post('https://spotify-ss-backend.herokuapp.com/api/users/register', {
      username: login,
      password: password
    })
    .then(res => {
      localStorage.setItem('token', res.data.token);
      dispatch({
        type: SIGNUP_SUCCESS
      });
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: err
      });
    });
};

// Track Actions----------------------------------------------------------------------------------------------------------------------

export const PLAY = 'PLAY';

export const play = trackId => {
  return {
    type: PLAY,
    payload: trackId
  };
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
