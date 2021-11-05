import {
  all,
  call,
  fork,
  put,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";

import apiRestoShop from "../../api/api-restoshop";
import {
  doRestoShopSucceed,
  doRestoShopFailed,
  doRestoShopByIdSucceed,
} from "../actions/restoshop";

function* handleGetRestoShop(action) {
  const { payload } = action;
  try {
    const result = yield call(apiRestoShop.allRestoShop, payload);
    // simpan ke redux store
    yield put(doRestoShopSucceed(result));
  } catch (error) {
    yield put(doRestoShopFailed(error));
  }
}

function* handleGetRestoShopById(action) {
  const { payload } = action;
  try {
    const result = yield call(apiRestoShop.findRestoById, payload);
    // simpan ke redux store
    yield put(doRestoShopByIdSucceed(result));
  } catch (error) {
    yield put(doRestoShopFailed(error));
  }
}

export { handleGetRestoShop, handleGetRestoShopById };
