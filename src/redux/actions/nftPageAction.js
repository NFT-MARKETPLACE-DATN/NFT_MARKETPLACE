import {
    GET_NFT_INFO_PENDING,
    GET_NFT_INFO_SUCCESS,
    GET_NFT_INFO_ERROR,
    SYNC_NFT_MARKET_PENDING,
    SYNC_NFT_MARKET_SUCCESS,
    SYNC_NFT_MARKET_ERROR
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