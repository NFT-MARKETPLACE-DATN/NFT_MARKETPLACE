import { takeLatest, put, call } from 'redux-saga/effects'
import {
    UPDATE_USER_BACKGROUND_PENDING,
    GET_NFT_BY_USER_PENDING,
    GET_TRANSACTION_BY_USER_PENDING
} from '../constants';
import { 
    updateUserBackgroundSuccess, 
    updateUserBackgroundError,
    getNftByUserSuccess,
    getNftByUserError,
    getTransactionUserSuccess,
    getTransactionUserError
} from '../actions';
import * as Api from '../../utils/request';
import { toast } from 'react-toastify';

function* updateUserBackground(action) {
  try {
    const { data } = action
    const payload = {
      url: `/account/update-background`,
      params: {
        userId: data.userID
      },
      data: {
        background:data.background
      }
    }
    const respond = yield call(Api.post, payload);
    // console.log(respond);
    if (respond.success) {
      yield put(updateUserBackgroundSuccess(respond))
      toast.success('Update Background Success')
    } else {
      yield put(updateUserBackgroundError(respond.message))
    }
  } catch (error) {
    yield put(updateUserBackgroundError(error))
    toast.error('Update Background Fail')
  }
}

function* getNftByUser(action) {
  try {
    const { data } = action
    const payload = {
      url: `/nft/get-nft-by-user`,
      params: {
        userId: data.userID,
        pageIndex: data.pageIndex,
        pageSize:data.pageSize,
        order:data.order,
        isListed:data.isListed,
        search:data.search,
        isCreated:data.isCreated
        
      },
    }
    const respond = yield call(Api.get, payload);
    // console.log(respond);
    if (respond.success) {
      yield put(getNftByUserSuccess(respond))
      // toast.success('Update Background Success')
    } else {
      yield put(getNftByUserError(respond.message))
    }
  } catch (error) {
    yield put(getNftByUserError(error))
  }
}

function* getTransactionUser(action) {
  try {
    const { data } = action;
    console.log(data);
    const payload = {
      url: `/nft/get-transaction`,
      params: {
        userId: data.userID,
        pageIndex: data.pageIndex,
        pageSize:data.pageSize,
        order:data.order,
        search:data.search,
      },
    }
    const respond = yield call(Api.get, payload);
    // console.log(respond);
    if (respond.success) {
      yield put(getTransactionUserSuccess(respond))
      // toast.success('Update Background Success')
    } else {
      yield put(getTransactionUserError(respond.message))
    }
  } catch (error) {
    yield put(getTransactionUserError(error))
  }
}
export default function* todoSaga() {
  // yield takeLatest(SET_WALLET, fetchDataSaga);
  yield takeLatest(UPDATE_USER_BACKGROUND_PENDING, updateUserBackground);
  yield takeLatest(GET_NFT_BY_USER_PENDING, getNftByUser);
  yield takeLatest(GET_TRANSACTION_BY_USER_PENDING, getTransactionUser)
}
