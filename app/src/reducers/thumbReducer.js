import * as actions from '../actions';

const initialState = {
  uppedIds: [],
  downedIds: [],
};

// upthumb case: if we find the index, remove it (togle behavior)
// otherwise add it
const upthumbTrack = (state, action) => {
  const uppedIds = [...state.uppedIds];
  const clickedId = action.payload;
  const foundIndex = uppedIds.indexOf(clickedId);
  if (foundIndex > -1) {
    uppedIds.splice(foundIndex, 1);
    return { ...state, uppedIds };
  } else {
    return { ...state, uppedIds: uppedIds.push(clickedId) };
  }
};

// downthumb case: if we find the index, remove it (togle behavior)
// otherwise add it
const downthumbTrack = (state, action) => {
  const downedIds = [...state.downedIds];
  const clickedId = action.payload;
  const foundIndex = downedIds.indexOf(clickedId);
  if (foundIndex > -1) {
    downedIds.splice(foundIndex, 1);
    return { ...state, downedIds };
  } else {
    return { ...state, downedIds: downedIds.push(clickedId) };
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.UPTHUMB_TRACK:
      return upthumbTrack(state, action);
    case actions.DOWNTHUMB_TRACK:
      return downthumbTrack(state, action);

    default:
      return state;
  }
};

