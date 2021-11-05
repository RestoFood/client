import {
  all,
  call,
  fork,
  put,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";

import apiRestoMenu from "../../api/api-resto-menu";
import { doRestoMenuSucceed, doRestoMenuFailed, doRestoMenuByRestoSucceed } from "../actions/resto-menu";

function* handleGetRestoMenu(action) {
  const { payload } = action;
  try {
    const result = yield call(apiRestoMenu.allRestoMenu, payload);
    //simpan ke redux store
    yield put(doRestoMenuSucceed(result));
  } catch (error) {
    yield put(doRestoMenuFailed(error));
  }
}

function* handleGetRestoMenuByResto(action) {
  const { payload } = action;
  try {
    const result = yield call(apiRestoMenu.allRestoMenubyRetoId, payload);
    //simpan ke redux store
    yield put(doRestoMenuByRestoSucceed(result));
  } catch (error) {
    yield put(doRestoMenuFailed(error));
  }
}

export { handleGetRestoMenu, handleGetRestoMenuByResto };
