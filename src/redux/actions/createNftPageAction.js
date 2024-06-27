import {
    CREATE_NFT_PENDING,
    CREATE_NFT_SUCCESS,
    CREATE_NFT_ERROR
  } from "../constants/index";
export function createNft(data) {
  return {
    type: CREATE_NFT_PENDING,
    data,
  };
}
export function createNftSuccess(respond) {
  return {
    type: CREATE_NFT_SUCCESS,
    respond,
  };
}
export function createNftError(error) {
  return {
    type: CREATE_NFT_ERROR,
    error,
  };
}