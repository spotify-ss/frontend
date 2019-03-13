import axios from 'axios';

export const LOGOUT = 'LOGOUT';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';

export const SONG_SEARCH_START = 'SONG_SEARCH_START';
export const SONG_SEARCH_SUCCESS = 'SONG_SEARCH_SUCCESS';

export const ARTIST_SEARCH_START = 'ARTIST_SEARCH_START';
export const ARTIST_SEARCH_SUCCESS = 'ARTIST_SEARCH_SUCCESS';

export const GET_ARTIST_SONGS_START = 'GET_ARTIST_START';
export const GET_ARTIST_SONGS_SUCCESS = 'GET_ARTIST_SUCCESS';

export const GET_CLOSEST_SONGS_START = 'GET_CLOSEST_SONG_START';
export const GET_CLOSEST_SONGS_SUCCESS = 'GET_CLOSEST_SONG_SUCCESS';

export const GET_CLOSEST_VALUES_START = 'GET_CLOSEST_VALUES_START';
export const GET_CLOSEST_VALUES_SUCCESS = 'GET_CLOSEST_VALUES_SUCCESS';

export const ERROR = 'ERROR';


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

export const gettingClosestValues = (target, page = 0) => dispatch => {
    dispatch({ type: GET_CLOSEST_VALUES_START });
    return axios
        .post('https://spotify-ss-backend.herokuapp.com/api/get_closest_values', {
            target,
            'page-number': page
        })
        .then(res => {
            console.log(res);
            dispatch({ type: GET_CLOSEST_SONGS_SUCCESS, payload: res.data });
        })
        .catch(err => dispatch({ type: ERROR, payload: err }));
};

export const gettingClosestSongs = (trackId, page = 0) => dispatch => {
    dispatch({ type: GET_CLOSEST_SONGS_START });
    return axios
        .post('https://spotify-ss-backend.herokuapp.com/api/get_closest_songs', {
            'track-id': trackId,
            'page-number': page
        })
        .then(res => {
            console.log(res);
            dispatch({ type: GET_CLOSEST_SONGS_SUCCESS, payload: res.data });
        })
        .catch(err => dispatch({ type: ERROR, payload: err }));
};

export const gettingArtistSongs = id => dispatch => {
    dispatch({ type: GET_ARTIST_SONGS_START });
    return axios
        .get('https://spotify-ss-backend.herokuapp.com/api/get_artist_songs', {
            params: {
                id
            }
        })
        .then(res => {
            console.log(res);
            dispatch({ type: GET_ARTIST_SONGS_SUCCESS, payload: res.data });
        })
        .catch(err => dispatch({ type: ERROR, payload: err }));
};

export const searchingArtists = terms => dispatch => {
    dispatch({ type: ARTIST_SEARCH_START });
    return axios
        .get('https://spotify-ss-backend.herokuapp.com/api/artist_search', {
            params: {
                terms
            }
        })
        .then(res => {
            console.log(res);
            dispatch({ type: ARTIST_SEARCH_SUCCESS, payload: res.data });
        })
        .catch(err => dispatch({ type: ERROR, payload: err }));
};

export const searchingSongs = terms => dispatch => {
    dispatch({ type: SONG_SEARCH_START, payload: terms });
    return axios
        .get(`https://spotify-ss-backend.herokuapp.com/api/track?track_name=${terms}`)
        .then(res => {
            console.log('RESPONSE:');
            console.log(res);
            dispatch({ type: SONG_SEARCH_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err.response);
            return dispatch({ type: ERROR, payload: err })
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
            localStorage.setItem('token', res.data.token);
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
