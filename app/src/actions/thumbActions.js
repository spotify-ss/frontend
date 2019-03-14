import axiosWithAuth from "../components/axiosWithAuth";

export const UPTHUMB_TRACK_START = "UPTHUMB_TRACK_START";
export const UPTHUMB_TRACK_SUCCESS = "UPTHUMB_TRACK_SUCCESS";

// export const GET_POSITIVE_TRACKS = 'GET_POSITIVE_TRACKS';

export const DELETE_UPTHUMB_START = "DELETE_UPTHUMB_START";
export const DELETE_UPTHUMB_SUCCESS = "DELETE_UPTHUMB_SUCCESS";

export const DOWNTHUMB_TRACK_START = "DOWNTHUMB_TRACK_START";
export const DOWNTHUMB_TRACK_SUCCESS = "DOWNTHUMB_TRACK_SUCCESS";

export const DELETE_DOWNTHUMB_START = "DELETE_DOWNTHUMB_START";
export const DELETE_DOWNTHUMB_SUCCESS = "DELETE_DOWNTHUMB_SUCCESS";

export const ERROR = "ERROR";

export const upthumbTrack = (trackId, userId) => dispatch => {
  dispatch({
    type: UPTHUMB_TRACK_START,
    payload: trackId
  });
  return axiosWithAuth()
    .post(
      "users/add/positive_track",
      {
        user_id: userId,
        track_id: trackId
      }
    )
    .then(res => {
      console.log(res);
      dispatch({ type: UPTHUMB_TRACK_SUCCESS });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ERROR, payload: err });
    });
};

export const downthumbTrack = (trackId, userId) => dispatch => {
  dispatch({
    type: DOWNTHUMB_TRACK_START,
    payload: trackId
  });
  return axiosWithAuth()
    .post(
      "users/add/negative_track",
      {
        user_id: userId,
        track_id: trackId
      }
    )
    .then(res => {
      console.log(res);
      dispatch({ type: DOWNTHUMB_TRACK_SUCCESS });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ERROR, payload: err });
    });
};

export const deleteUpthumbTrack = trackId => dispatch => {
  dispatch({
    type: DELETE_UPTHUMB_START,
    payload: trackId
  });
  return axiosWithAuth()
    .delete(
      "users/delete/positive_track",
      { data: { track_id: trackId } }
    )
    .then(res => {
      console.log(res);
      dispatch({ type: DELETE_UPTHUMB_SUCCESS });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ERROR, payload: err });
    });
  // type: UPTHUMB_TRACK,
  // payload: id
};

export const deleteDownthumbTrack = trackId => dispatch => {
  dispatch({
    type: DELETE_DOWNTHUMB_START,
    payload: trackId
  });
  return axiosWithAuth()
    .delete(
      "users/delete/negative_track",
      { data: { track_id: trackId } }
    )
    .then(res => {
      console.log(res);
      dispatch({ type: DELETE_DOWNTHUMB_SUCCESS });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ERROR, payload: err });
    });
  // type: DOWNTHUMB_TRACK,
  // payload: id
};
