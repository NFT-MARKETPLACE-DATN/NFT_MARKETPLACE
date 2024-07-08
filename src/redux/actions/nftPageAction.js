import {
    GET_NFT_INFO_PENDING,
    GET_NFT_INFO_SUCCESS,
    GET_NFT_INFO_ERROR,
    SYNC_NFT_MARKET_PENDING,
    SYNC_NFT_MARKET_SUCCESS,
    SYNC_NFT_MARKET_ERROR,
    BUY_NFT_BY_USER_PENDING,
    BUY_NFT_BY_USER_SUCCESS,
    BUY_NFT_BY_USER_ERROR,
    SET_LOADING_NFT
  } from "../constants/index";

export function getNftInfo(data) {
    return {
      type: GET_NFT_INFO_PENDING,
      data,
    };
}
export function getNftInfoSuccess(respond) {
    return {
      type: GET_NFT_INFO_SUCCESS,
      respond,
    };
}
export function getNftInfoError(error) {
    return {
      type: GET_NFT_INFO_ERROR,
      error,
    };
}

export function syncNftMarket(data) {
  return {
    type: SYNC_NFT_MARKET_PENDING,
    data,
  };
}
export function syncNftMarketSuccess(respond) {
  return {
    type: SYNC_NFT_MARKET_SUCCESS,
    respond,
  };
}
export function syncNftMarketError(error) {
  return {
    type: SYNC_NFT_MARKET_ERROR,
    error,
  };
}

export function buyNftByUser(data) {
  return {
    type: BUY_NFT_BY_USER_PENDING,
    data,
  };
}
export function buyNftByUserSuccess(respond) {
  return {
    type: BUY_NFT_BY_USER_SUCCESS,
    respond,
  };
}
export function buyNftByUserError(error) {
  return {
    type: BUY_NFT_BY_USER_ERROR,
    error,
  };
}

export const setLoadingNft = (data) => ({
  type: SET_LOADING_NFT,
  data
})