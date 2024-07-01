import { takeLatest, put, call } from 'redux-saga/effects'
import { CREATE_NFT_PENDING } from '../constants'
import { createNftSuccess, createNftError } from '../actions'
import * as Api from '../../utils/request'
import { toast } from 'react-toastify'
function* createNft(action) {
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
        transaction: data.transaction,
        metadataUrl:data.metadataUrl
      }
    }
    const respond = yield call(Api.post, payload);
    // console.log(respond);
    if (respond.success) {
      yield put(createNftSuccess(respond))
      toast.success('Create NFT success')
    } else {
      yield put(createNftError(respond.message))
    }
  } catch (error) {
    yield put(createNftError(error))
  }
}
export default function* todoSaga() {
  // yield takeLatest(SET_WALLET, fetchDataSaga);
  yield takeLatest(CREATE_NFT_PENDING, createNft)
}
