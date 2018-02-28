import { FAILURE, REQUEST, SUCCESS } from './action-type.util';
import axios from 'axios';

export const ACTION_TYPES = {
  FIND_ALL: 'sessions/FIND_ALL',
  RESET: 'sessions/RESET'
};

const initialState = {
  loading: false,
  requestSuccess: false,
  requestFailure: false,
  findAllError: false,
  invalidationError: false
};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FIND_ALL):
      return {
        ...state,
        loading: true
      };
    case SUCCESS(ACTION_TYPES.FIND_ALL):
      return {
        ...state,
        loading: false,
        requestSuccess: true
      };
    case FAILURE(ACTION_TYPES.FIND_ALL):
      return {
        ...state,
        loading: false,
        requestFailure: true,
        findAllError: true
      };
    case ACTION_TYPES.RESET:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

// Actions
const apiUrl = '/api/account/sessions/';

export const findAll = () => dispatch => {
  dispatch({
    type: ACTION_TYPES.FIND_ALL,
    payload: axios.post(`${apiUrl}`)
  });
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
