import * as actions from '../actions';

const initialState = {
  results: [],
  searching: false,
  hasError: false,
  searchTerms: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.TRACK_SEARCH_START:
      return {
        ...state,
        searching: true,
        hasError: false,
        searchTerms: action.payload
      };

    case actions.TRACK_SEARCH_SUCCESS:
      return {
        ...state,
        hasError: false,
        searching: false,
        results: action.payload
      };

    case actions.ERROR:
      return {
        ...state,
        searching: false,
        hasError: true
      };

    default:
      return state;
  }
};
