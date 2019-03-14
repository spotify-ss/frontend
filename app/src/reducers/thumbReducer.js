import * as actions from '../actions/thumb';

const initialState = {
  uppedIds: [],
  downedIds: []
};

// upthumb case: if we find the index, remove it (togle behavior)
// otherwise add it
const upthumbTrack = (state, action) => {
  const clickedId = action.payload;
  const uppedIds = [...state.uppedIds];
  const uppedIndex = uppedIds.indexOf(clickedId);
  const downedIds = [...state.downedIds];
  const downedIndex = downedIds.indexOf(clickedId);
  if (uppedIndex > -1) {
    uppedIds.splice(uppedIndex, 1);
  } else {
    uppedIds.push(clickedId);
  }

  // remove it if it's in downedIds, wouldn't make sense to have an up&down at same time
  if (downedIndex > -1) {
    downedIds.splice(downedIndex, 1);
  }

  return { ...state, uppedIds, downedIds };
};

// downthumb case: if we find the index, remove it (togle behavior)
// otherwise add it
const downthumbTrack = (state, action) => {
  const downedIds = [...state.downedIds];
  const clickedId = action.payload;
  const foundIndex = downedIds.indexOf(clickedId);
  const uppedIds = [...state.uppedIds];
  const uppedIndex = uppedIds.indexOf(clickedId);
  if (foundIndex > -1) {
    downedIds.splice(foundIndex, 1);
  } else {
    downedIds.push(clickedId);
  }

  if (uppedIndex > -1) {
    uppedIds.splice(uppedIndex, 1);
  }

  return { ...state, uppedIds, downedIds };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.UPTHUMB_TRACK_START:
      return upthumbTrack(state, action);
    case actions.DOWNTHUMB_TRACK_START:
      return downthumbTrack(state, action);

    default:
      return state;
  }
};
