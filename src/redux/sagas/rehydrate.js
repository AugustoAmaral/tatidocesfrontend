import { takeEvery, put, all } from "redux-saga/effects";
import { hydrateCandies } from "../actions/candy";

function* asyncReadTodos(action) {
  yield put(hydrateCandies());
}

export function* rehydrate() {
  yield all([takeEvery("persist/REHYDRATE", asyncReadTodos)]);
}
