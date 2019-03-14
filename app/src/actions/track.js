import axios from 'axios';
import axiosWithAuth from '../components/axiosWithAuth';

import { ERROR } from './shared';

export const GET_CLOSEST_VALUES_SUCCESS = 'GET_CLOSEST_VALUES_SUCCESS';
export const GET_CLOSEST_VALUES_START = 'GET_CLOSEST_VALUES_START';

export const TOGGLE_SEARCH_ARTIST = 'TOGGLE_SEARCH_ARTIST';
export const TRACK_SEARCH_START = 'TRACK_SEARCH_START';
export const TRACK_SEARCH_SUCCESS = 'TRACK_SEARCH_SUCCESS';

export const ARTIST_SEARCH_START = 'ARTIST_SEARCH_START';
export const ARTIST_SEARCH_SUCCESS = 'ARTIST_SEARCH_SUCCESS';

export const GET_ARTIST_TRACKS_START = 'GET_ARTIST_START';
export const GET_ARTIST_TRACKS_SUCCESS = 'GET_ARTIST_SUCCESS';

export const GET_CLOSEST_TRACKS_START = 'GET_CLOSEST_TRACK_START';
export const GET_CLOSEST_TRACKS_SUCCESS = 'GET_CLOSEST_TRACK_SUCCESS';

export const SEARCH_TERM_CHANGED = 'SEARCH_TERM_CHANGED';

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

export const toggleSearchArtist = () => {
  return {
    type: TOGGLE_SEARCH_ARTIST
  };
};

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
  dispatch({
    type: TRACK_SEARCH_START,
    payload: {
      searchingByArtists: true,
      searchTerms
    }
  });
  return axios
    .get(`https://spotify-ss-backend.herokuapp.com/api/artists/artist/${searchTerms}`)
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
    .get(`https://spotify-ss-backend.herokuapp.com/api/track/${searchTerms}`)
    .then(res => {
      dispatch({ type: TRACK_SEARCH_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err.response);
      return dispatch({ type: ERROR, payload: err });
    });
};
