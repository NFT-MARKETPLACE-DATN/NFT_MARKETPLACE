import { takeLatest, put, call } from 'redux-saga/effects';
import {SET_WALLET,LOGIN_PENDING} from "../constants";
import {loginSuccess,loginError,setWallet} from "../actions";
import * as Api from '../../utils/request';
import { toast } from 'react-toastify';
// function* fetchDataSaga(action) {
//     try {
//         const { data } = action;
//         // console.log(data);
//         const payload = {
//             url: `/health-check`,
//             // params: {
//             //   pageIndex: data.pageIndex,
//             //   pageSize: data.pageSize,
//             //   exchangeId: data.exchangeId,
//             //   walletAddress: data.walletAddress,
//             //   chainId: data.chainId,
//             //   userId: data.userId,
//             //   anonymousId: data.anonymousId,
//             //   isCSV: data.isCSV,
//             // },
//         };
//         const respond = yield call(Api.get, payload);
//         console.log(respond);
//         if (respond.success) {
//             console.log("Oke");
//             // yield put(getHoldingsSuccess(respond));
//           } else {
//             // yield put(getHoldingsError(respond.message));
//         }
//         // console.log(data.data);
//         // const todos = yield call();
//     } catch (error) {
//     }
// }


function* getAccountInfo(action){
    try {
        const { data } = action;
        const payload = {
            url: `/account/login`,
            params: {
                address: data.address,
            },
        };
        const respond = yield call(Api.get, payload);
        if (respond.success) {
          yield put(loginSuccess(respond));
          toast.success("Login Success")
        } else {
          yield put(loginError(respond.message));
        }
    } catch (error) {
        yield put(loginError(respond.message));
    }
}
export default function* todoSaga() {
    // yield takeLatest(SET_WALLET, fetchDataSaga);
    yield takeLatest(LOGIN_PENDING, getAccountInfo);
}