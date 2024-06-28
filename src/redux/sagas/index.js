// rootSaga.js
import { all } from 'redux-saga/effects';
import homePageSaga from "./homePageSaga";
import createNftPageSaga from "./createNftPageSaga";
export default function* rootSaga() {
  yield all([
    homePageSaga(),
    createNftPageSaga()
    // Add more watcher sagas here if needed
  ]);
}
