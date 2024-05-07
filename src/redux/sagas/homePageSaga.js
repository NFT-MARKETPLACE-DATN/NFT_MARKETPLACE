import { takeLatest, put, call } from 'redux-saga/effects';
import {FETCH_DATA} from "../constants/homePageConstant";
import {fetchDatas} from "../actions/homePageAction";

function* fetchDataSaga() {
    try {
        const todos = yield call(getTodos);
    } catch (error) {
    }
}

export default function* todoSaga() {
    yield takeLatest(FETCH_DATA, fetchDataSaga);

}