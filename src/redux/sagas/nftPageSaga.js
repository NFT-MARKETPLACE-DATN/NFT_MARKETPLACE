import { takeLatest, put, call } from 'redux-saga/effects'
import { 
    GET_NFT_INFO_PENDING 
} from '../constants'
import { 
    getNftInfoSuccess, 
    getNftInfoError 
} from '../actions'
import * as Api from '../../utils/request'
import { toast } from 'react-toastify'
function* getNftInfo(action) {
  try {
    const { data } = action
    const payload = {
      url: `/nft/create-nft`,
      params: {
        userId: data.userID
      },
      data: {
        nftName: data.nftName,
        symbol: data.symbol,
        image: data.image,
        description: data.description,
        attribute: data.attribute,
        mintAddress: data.mintAddress,
        tokenAccount: data.tokenAccount,
        transaction: data.transaction
      }
    }
    const respond = yield call(Api.get, payload);
    // console.log(respond);
    if (respond.success) {
      yield put(getNftInfoSuccess(respond))
      toast.success('Create NFT success')
    } else {
      yield put(getNftInfoError(respond.message))
    }
  } catch (error) {
    yield put(getNftInfoError(error.message))
  }
}
export default function* todoSaga() {
  // yield takeLatest(SET_WALLET, fetchDataSaga);
  yield takeLatest(GET_NFT_INFO_PENDING, getNftInfo)
}
