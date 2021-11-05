import * as ActionType from "../constants/restoshop";

export const doRestoShopRequest = (payload) => ({
    type: ActionType.GET_RESTOSHOP_REQUEST,
    payload,
});

export const doRestoShopSucceed = (payload) => ({
    type: ActionType.GET_RESTOSHOP_SUCCEED,
    payload,
});

export const doRestoShopFailed = (payload) => ({
    type: ActionType.GET_RESTOSHOP_FAILED,
    payload,
});

export const doRestoShopByIdRequest = (payload) => ({
    type: ActionType.GET_RESTOSHOPBYID_REQUEST,
    payload,
});

export const doRestoShopByIdSucceed = (payload) => ({
    type: ActionType.GET_RESTOSHOPBYID_SUCCEED,
    payload,
});