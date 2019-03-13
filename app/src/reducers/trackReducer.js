import * as actions from '../actions';

const initialState = {
  currentTrack: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.PLAY:
      return {
        ...state,
        currentTrack: action.payload
      };
    default:
      return state;
  }
};
