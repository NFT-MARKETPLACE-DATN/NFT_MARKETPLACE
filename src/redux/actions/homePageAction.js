import {
  SET_WALLET,
  SET_LOGIN,
  LOGIN_PENDING,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  GET_NFT_LISTED_PENDING,
  GET_NFT_LISTED_SUCCESS,
  GET_NFT_LISTED_ERROR,
  SET_LOADING
} from "../constants/index";

export const setWallet = (data) => ({
  type: SET_WALLET,
  data
})
export const setLogin = (data) => ({
  type: SET_LOGIN,
  data
})
export const setLoading = (data) => ({
  type: SET_LOADING,
  data
})
export function login(data) {
  return {
    type: LOGIN_PENDING,
    data,
  };
}
export function loginSuccess(respond) {
  return {
    type: LOGIN_SUCCESS,
    respond,
  };
}
export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error,
  };
}
export function getNftListed(data) {
  return {
    type: GET_NFT_LISTED_PENDING,
    data,
  };
}
export function getNftListedSuccess(respond) {
  return {
    type: GET_NFT_LISTED_SUCCESS,
    respond,
  };
}
export function getNftListedError(error) {
  return {
    type: GET_NFT_LISTED_ERROR,
    error,
  };
}