import { LOGGING_IN, LOGIN_SUCCESS, LOGIN_ERROR } from '../actions';

const initialState = {
  inProcess: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGGING_IN: return {
      ...state,
      inProcess: true,
      beginTime: new Date(Date.now()).toString()
    };
    case LOGIN_SUCCESS: return {
      ...state,
      inProcess: false,
      list: action.payload,
      returnTime: new Date(Date.now()).toString()

    };
    case LOGIN_ERROR: return {
      ...state,
      inProcess: false,
      error: action.payload,
      returnTime: new Date(Date.now()).toString()
    };
    default: return state;
  };
};
