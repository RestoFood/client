import * as ActionType from "../constants/restoshop";

// initial data
const INIT_STATE = {
  restoshop: null,
  restoshopById: null,
  isLoading: false,
  error: null,
  status: null,
};

// create reducer
const restoShopReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_RESTOSHOP_REQUEST:
      return applyGetRestoShopRequest(state, action);
    case ActionType.GET_RESTOSHOP_SUCCEED:
      return applyGetRestoShopSucceed(state, action);
    case ActionType.GET_RESTOSHOP_FAILED:
      return applyGetRestoShopFailed(state, action);
    case ActionType.GET_RESTOSHOPBYID_REQUEST:
      return applyGetRestoShopByIdRequest(state, action);
    case ActionType.GET_RESTOSHOPBYID_SUCCEED:
      return applyGetRestoShopByIdSucceed(state, action);
    default:
      return state;
  }
};

// action reducer
const applyGetRestoShopRequest = (state, action) => {
  return {
    ...state,
    isLoading: true,
  };
};

const applyGetRestoShopSucceed = (state, action) => {
  return {
    ...state,
    restoshop: action.payload,
    isLoading: true,
  };
};

const applyGetRestoShopFailed = (state, action) => {
  return {
    ...state,
    isLoading: true,
    error: action.payload.error,
  };
};

const applyGetRestoShopByIdRequest = (state, action) => {
  return {
    ...state,
    isLoading: true,
  };
};

const applyGetRestoShopByIdSucceed = (state, action) => {
  return {
    ...state,
    restoshopById: action.payload,
    isLoading: true,
  };
};

export default restoShopReducer;
