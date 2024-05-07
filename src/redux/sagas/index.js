// rootSaga.js
import { all } from 'redux-saga/effects';
import todoSaga from "./homePageSaga";
export default function* rootSaga() {
  yield all([
    todoSaga()
    // Add more watcher sagas here if needed
  ]);
}
