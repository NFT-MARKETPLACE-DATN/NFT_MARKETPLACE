import { takeLatest, put, call } from 'redux-saga/effects'
import { 
    GET_NFT_INFO_PENDING,
    SYNC_NFT_MARKET_PENDING,
    BUY_NFT_BY_USER_PENDING
} from '../constants'
import { 
    getNftInfoSuccess, 
    getNftInfoError,
    syncNftMarketSuccess,
    syncNftMarketError ,
    buyNftByUserSuccess,
    buyNftByUserError
} from '../actions'
import * as Api from '../../utils/request'
import { toast } from 'react-toastify'

function* getNftInfo(action) {
  try {
    const { data } = action
    const payload = {
      url: `/nft/get-nft-by-id`,
      params: {
        nftId: data.nftID
      },
    }
    const respond = yield call(Api.get, payload);
    // console.log(respond);
    if (respond.success) {
      yield put(getNftInfoSuccess(respond))
      // toast.success('Create NFT success')
    } else {
      yield put(getNftInfoError(respond.message))
    }
  } catch (error) {
    yield put(getNftInfoError(error.message))
  }
}
function* syncNftMarket(action) {
  try {
    const { data } = action
    const payload = {
      url: `/nft/sync-nft-market`,
      params: {
        userId: data.userID,
        isAction:data.isAction
      },
      data:{
        nftID: data.nftID,
        price: data.price,
        isList: data.isList,
        isTrending: data.isTrending,
        transaction: data.transaction
      }
    }
    const respond = yield call(Api.post, payload);
    // console.log(respond);
    if (respond.success) {
      yield put(syncNftMarketSuccess(respond))
      toast.success(respond.message)
    } else {
      yield put(syncNftMarketError(respond.message))
      toast.error(respond.message)
    }
  } catch (error) {
    yield put(syncNftMarketError(error.message))
  }
}

function* buyNftByUser(action) {
  try {
    const { data } = action
    const payload = {
      url: `/nft/transfer-nft`,
      params: {
        userId: data.userID,
        nftId: data.nftID
      },
      data:{
        userBuyAddress: data.userBuyAddress,
        mintAddress: data.mintAddress,
        tokenAccount: data.tokenAccount,
        transactionBuy: data.transactionBuy,
      }
    }
    const respond = yield call(Api.post, payload);
    if (respond.success) {
      yield put(buyNftByUserSuccess(respond))
      toast.success(respond.message)
    } else {
      yield put(buyNftByUserError(respond.message))
      toast.error(respond.message)
    }
  } catch (error) {
    yield put(buyNftByUserError(error.message))
    toast.error(error.message)
  }
}

export default function* todoSaga() {
  // yield takeLatest(SET_WALLET, fetchDataSaga);
  yield takeLatest(GET_NFT_INFO_PENDING, getNftInfo);
  yield takeLatest(SYNC_NFT_MARKET_PENDING, syncNftMarket);
  yield takeLatest(BUY_NFT_BY_USER_PENDING, buyNftByUser);
}
