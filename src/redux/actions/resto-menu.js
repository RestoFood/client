import * as ActionType from "../constants/resto-menu";

export const doRestoMenuRequest = (payload) => ({
  type: ActionType.GET_RESTOMENU_REQUEST,
  payload,
});

export const doRestoMenuSucceed = (payload) => ({
  type: ActionType.GET_RESTOMENU_SUCCEED,
  payload,
});

export const doRestoMenuFailed = (payload) => ({
  type: ActionType.GET_RESTOMENU_FAILED,
  payload,
});
