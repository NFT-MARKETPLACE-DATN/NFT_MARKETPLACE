import { takeLatest, put, call } from 'redux-saga/effects'
import {
    GET_USER_BY_ADMIN_PENDING,
    UPDATE_ROLE_USER_PENDING,
    GET_NFT_BY_ADMIN_PENDING,
    UPDATE_NFT_TRENDING_PENDING
} from '../constants';
import { 
    getUserByAdminSuccess,
    getUserByAdminError,
    updateRoleUserSuccess,
    updateRoleUserError,
    getNftByAdminSuccess,
    getNftByAdminError,
    updateNftTrendingSuccess,
    updateNftTrendingError
} from '../actions';
import * as Api from '../../utils/request';
import { toast } from 'react-toastify';

function* getUserByAdmin(action) {
    try {
      const { data } = action
      const payload = {
        url: `/admin/get-user`,
        params: {
          pageIndex: data.pageIndex,
          pageSize:data.pageSize,
          order:data.order,
          search:data.search,
        },
      }
      const respond = yield call(Api.get, payload);
      // console.log(respond);
      if (respond.success) {
        yield put(getUserByAdminSuccess(respond))
        // toast.success('Update Background Success')
      } else {
        yield put(getUserByAdminError(respond.message))
      }
    } catch (error) {
      yield put(getNftByUserError(error))
    }
  }
function* updateRoleUser(action) {
    try {
      const { data } = action
      const payload = {
        url: `/admin/update-user`,
        data:{
            userId:data.userID,
            isRole:data.isRole
        }
      }
      const respond = yield call(Api.post, payload);
      // console.log(respond);
      if (respond.success) {
        yield put(updateRoleUserSuccess(respond))
        toast.success('Update role user ')
      } else {
        yield put(updateRoleUserError(respond.message))
      }
    } catch (error) {
      yield put(getNftByUserError(error))
    }
  }
function* getNftByAdmin(action) {
    try {
      const { data } = action
      const payload = {
        url: `/admin/get-nfts`,
        params: {
          pageIndex: data.pageIndex,
          pageSize:data.pageSize,
          search:data.search,
          isList:data.isList,
        },
      }
      const respond = yield call(Api.get, payload);
      // console.log(respond);
      if (respond.success) {
        yield put(getNftByAdminSuccess(respond))
        // toast.success('Update Background Success')
      } else {
        yield put(getNftByAdminError(respond.message))
      }
    } catch (error) {
      yield put(getNftByAdminError(error))
    }
  }
function* updateNftTrending(action) {
    try {
      const { data } = action
      const payload = {
        url: `/admin/update-nft-is-trending`,
        data:{
            nftId:data.nftID,
            isTrending:data.isTrending
        }
      }
      const respond = yield call(Api.post, payload);
      // console.log(respond);
      if (respond.success) {
        yield put(updateNftTrendingSuccess(respond))
        toast.success(`Update Nft ${data.isTrending ? `list trending market` : "unlist trending market"}`)
      } else {
        yield put(updateNftTrendingError(respond.message))
      }
    } catch (error) {
      yield put(updateNftTrendingError(error))
    }
  }
export default function* todoSaga() { 
    yield takeLatest(GET_USER_BY_ADMIN_PENDING, getUserByAdmin);
    yield takeLatest(UPDATE_ROLE_USER_PENDING, updateRoleUser);
    yield takeLatest(GET_NFT_BY_ADMIN_PENDING, getNftByAdmin);
    yield takeLatest(UPDATE_NFT_TRENDING_PENDING, updateNftTrending);
  }