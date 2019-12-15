import { all } from "redux-saga/effects";
import { rehydrate } from "./sagas/rehydrate";

export default function* rootSaga() {
  yield all([rehydrate()]);
}
