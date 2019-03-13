import * as actions from "../actions";

const initialState = {
  results: [],
  searching: false,
  hasError: false,
  searchTerms: "",
  searchingByArtists: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.TRACK_SEARCH_START:
      return {
        ...state,
        searching: true,
        hasError: false,
        searchTerms: action.payload.searchTerms,
        searchingByArtists: action.payload.searchingByArtists,
      };

    case actions.TRACK_SEARCH_SUCCESS:
      return {
        ...state,
        hasError: false,
        searching: false,
        results: action.payload
      };

    case action.TOGGLE_SEARCH_START:
      return {
        ...state,
        searchingArtists: true,
      }

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
