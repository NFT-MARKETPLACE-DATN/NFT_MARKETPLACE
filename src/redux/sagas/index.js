// rootSaga.js
import { all } from 'redux-saga/effects';
import homePageSaga from "./homePageSaga";
import createNftPageSaga from "./createNftPageSaga";
import accountPageSaga from "./accountPageSaga";
import nftPageSaga from "./nftPageSaga";
export default function* rootSaga() {
  yield all([
    homePageSaga(),
    createNftPageSaga(),
    accountPageSaga(),
    nftPageSaga()
    // Add more watcher sagas here if needed
  ]);
}
