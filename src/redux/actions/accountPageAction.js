import {
    UPDATE_USER_BACKGROUND_PENDING,
    UPDATE_USER_BACKGROUND_SUCCESS,
    UPDATE_USER_BACKGROUND_ERROR,
    GET_NFT_BY_USER_PENDING,
    GET_NFT_BY_USER_SUCCESS,
    GET_NFT_BY_USER_ERROR,
    GET_TRANSACTION_BY_USER_PENDING,
    GET_TRANSACTION_BY_USER_SUCCESS,
    GET_TRANSACTION_BY_USER_ERROR,
    SET_ACCOUNT
  } from "../constants/index";

export function updateUserBackground(data) {
    return {
      type: UPDATE_USER_BACKGROUND_PENDING,
      data,
    };
  }
export function updateUserBackgroundSuccess(respond) {
    return {
      type: UPDATE_USER_BACKGROUND_SUCCESS,
      respond,
    };
  }
export function updateUserBackgroundError(error) {
    return {
      type: UPDATE_USER_BACKGROUND_ERROR,
      error,
    };
  }

export function getNftByUser(data) {
    return {
      type: GET_NFT_BY_USER_PENDING,
      data,
    };
  }
export function getNftByUserSuccess(respond) {
    return {
      type: GET_NFT_BY_USER_SUCCESS,
      respond,
    };
  }
export function getNftByUserError(error) {
    return {
      type: GET_NFT_BY_USER_ERROR,
      error,
    };
  }

export function getTransactionUser(data) {
    return {
      type: GET_TRANSACTION_BY_USER_PENDING,
      data,
    };
  }
export function getTransactionUserSuccess(respond) {
    return {
      type: GET_TRANSACTION_BY_USER_SUCCESS,
      respond,
    };
  }
export function getTransactionUserError(error) {
    return {
      type: GET_TRANSACTION_BY_USER_ERROR,
      error,
    };
  }
export const setAccount = (data) => ({
  type: SET_ACCOUNT,
  data
})