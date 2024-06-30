import {
    GET_NFT_INFO_PENDING,
    GET_NFT_INFO_SUCCESS,
    GET_NFT_INFO_ERROR
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