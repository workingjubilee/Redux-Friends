import { FETCHING_FRIENDS, FETCH_SUCCESS, FETCH_ERROR } from '../actions';

const initialState = {
  inProcess: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCHING_FRIENDS: return {
      ...state,
      inProcess: true,
      beginTime: new Date(Date.now()).toString()
    };
    case FETCH_SUCCESS: return {
      ...state,
      inProcess: false,
      list: action.payload,
      returnTime: new Date(Date.now()).toString()
    };
    case FETCH_ERROR: return {
      ...state,
      inProcess: false,
      error: action.payload,
      returnTime: new Date(Date.now()).toString()
    };
    default: return state;
  };
};
