import { takeEvery, all } from "redux-saga/effects";
import * as ActionType from "../constants/category";
import * as ActionTypeUser from "../constants/user";
import * as ActionTypeRestoMenu from "../constants/resto-menu";
import * as ActionTypeRestoShop from "../constants/restoshop";

import {
  handleCreateCategory,
  handleDeleteCategory,
  handleGetCategory,
  handleUpdateCategory,
} from "../sagas/categorySaga";

import { handleSignup, handleSignin } from "../sagas/userSaga";

import { handleGetRestoMenu, handleGetRestoMenuByResto } from "../sagas/restoMenuSaga";
import { handleGetRestoShop, handleGetRestoShopById } from "./restoshopSaga";

function* watchAll() {
  yield all([
    takeEvery(ActionType.GET_CATEGORY_REQUEST, handleGetCategory),
    takeEvery(ActionType.CREATE_CATEGORY_REQUEST, handleCreateCategory),
    takeEvery(ActionType.UPDATE_CATEGORY_REQUEST, handleUpdateCategory),
    takeEvery(ActionType.DELETE_CATEGORY_REQUEST, handleDeleteCategory),
    takeEvery(ActionTypeUser.ADD_SIGNUP_REQUEST, handleSignup),
    takeEvery(ActionTypeUser.GET_SIGNIN_REQUEST, handleSignin),
    takeEvery(ActionTypeRestoMenu.GET_RESTOMENU_REQUEST, handleGetRestoMenu),
    takeEvery(ActionTypeRestoShop.GET_RESTOSHOP_REQUEST, handleGetRestoShop),
    takeEvery(ActionTypeRestoMenu.GET_RESTOMENUBYRESTO_REQUEST, handleGetRestoMenuByResto),
    takeEvery(ActionTypeRestoShop.GET_RESTOSHOPBYID_REQUEST, handleGetRestoShopById)
  ]);
}

export default watchAll;
