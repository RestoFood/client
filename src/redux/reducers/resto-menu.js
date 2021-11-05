import * as ActionType from "../constants/resto-menu";
// initial data
const INIT_STATE = {
  restomenu: null,
  isLoading: false,
  error: null,
  status: null,
};

// create reducer
const restoMenuReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_RESTOMENU_REQUEST:
      return applyGetRestoMenuRequest(state, action);
    case ActionType.GET_RESTOMENU_SUCCEED:
      return applyGetRestoMenuSucceed(state, action);
    case ActionType.GET_RESTOMENU_FAILED:
      return applyGetRestoMenuFailed(state, action);
    case ActionType.GET_RESTOMENUBYRESTO_REQUEST:
      return applyGetRestoMenuByRestoRequest(state, action);
    case ActionType.GET_RESTOMENUBYRESTO_SUCCEED:
      return applyGetRestoMenuByRestoSucceed(state, action);
    default:
      return state;
  }
};

//action reducer
const applyGetRestoMenuRequest = (state, action) => {
  return {
    ...state,
    isLoading: true,
  };
};

const applyGetRestoMenuSucceed = (state, action) => {
  return {
    ...state,
    restomenu: action.payload,
    isLoading: false,
  };
};

const applyGetRestoMenuFailed = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: action.payload.error,
  };
};

const applyGetRestoMenuByRestoRequest = (state, action) => {
  return {
    ...state,
    isLoading: true,
  };
};

const applyGetRestoMenuByRestoSucceed = (state, action) => {
  return {
    ...state,
    restomenu: action.payload,
    isLoading: false,
  };
};

export default restoMenuReducer;
