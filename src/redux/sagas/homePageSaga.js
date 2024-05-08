import { takeLatest, put, call } from 'redux-saga/effects';
import {FETCH_DATA} from "../constants/homePageConstant";
import {fetchDatas} from "../actions/homePageAction";

function* fetchDataSaga() {
    try {
        console.log("fasdfasdf");
        // const todos = yield call();
    } catch (error) {
    }
}

export default function* todoSaga() {
    yield takeLatest(FETCH_DATA, fetchDataSaga);

}