// rootSaga.js
import { all } from 'redux-saga/effects';
import homePageSaga from "./homePageSaga";
export default function* rootSaga() {
  yield all([
    homePageSaga()
    // Add more watcher sagas here if needed
  ]);
}
