import * as actions from '../actions/auth';
import { ERROR } from '../actions/shared';

const initialState = {
  logginIn: false,
  isAuthenticated: false,
  hasError: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGOUT:
      return { ...state, isAuthenticated: false };
    case actions.LOGIN_START:
      return {
        ...state,
        logginIn: true
      };
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        logginIn: false,
        isAuthenticated: true
      };
    case ERROR:
      return {
        ...state,
        logginIn: false,
        hasError: true
      };
    default:
      return state;
  }
};
