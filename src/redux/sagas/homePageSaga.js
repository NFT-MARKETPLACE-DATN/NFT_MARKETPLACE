import { takeLatest, put, call } from 'redux-saga/effects';
import {FETCH_DATA} from "../constants/homePageConstant";
import {fetchDatas} from "../actions/homePageAction";

function* fetchDataSaga(data) {
    try {
        console.log(data.data);
        // const todos = yield call();
    } catch (error) {
    }
}

export default function* todoSaga() {
    yield takeLatest(FETCH_DATA, fetchDataSaga);

}