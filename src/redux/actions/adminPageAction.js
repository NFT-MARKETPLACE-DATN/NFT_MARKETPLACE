import {
    GET_USER_BY_ADMIN_PENDING,
    GET_USER_BY_ADMIN_SUCCESS,
    GET_USER_BY_ADMIN_ERROR,
    SET_TAB,
    UPDATE_ROLE_USER_PENDING,
    UPDATE_ROLE_USER_ERROR,
    UPDATE_ROLE_USER_SUCCESS,
    GET_NFT_BY_ADMIN_PENDING,
    GET_NFT_BY_ADMIN_SUCCESS,
    GET_NFT_BY_ADMIN_ERROR,
    UPDATE_NFT_TRENDING_PENDING,
    UPDATE_NFT_TRENDING_SUCCESS,
    UPDATE_NFT_TRENDING_ERROR
} from "../constants";

export function setTab(data) {
    return {
      type: SET_TAB,
      data,
    };
  }
export function getUserByAdmin(data) {
    return {
      type: GET_USER_BY_ADMIN_PENDING,
      data,
    };
  }
export function getUserByAdminSuccess(respond) {
    return {
      type: GET_USER_BY_ADMIN_SUCCESS,
      respond,
    };
  }
export function getUserByAdminError(error) {
    return {
      type: GET_USER_BY_ADMIN_ERROR,
      error,
    };
  }

export function updateRoleUser(data) {
    return {
      type: UPDATE_ROLE_USER_PENDING,
      data,
    };
  }
export function updateRoleUserSuccess(respond) {
    return {
      type: UPDATE_ROLE_USER_SUCCESS,
      respond,
    };
  }
export function updateRoleUserError(error) {
    return {
      type: UPDATE_ROLE_USER_ERROR,
      error,
    };
  }

export function getNftByAdmin(data) {
    return {
      type: GET_NFT_BY_ADMIN_PENDING,
      data,
    };
  }
export function getNftByAdminSuccess(respond) {
    return {
      type: GET_NFT_BY_ADMIN_SUCCESS,
      respond,
    };
  }
export function getNftByAdminError(error) {
    return {
      type: GET_NFT_BY_ADMIN_ERROR,
      error,
    };
  }
export function updateNftTrending(data) {
    return {
      type: UPDATE_NFT_TRENDING_PENDING,
      data,
    };
  }
export function updateNftTrendingSuccess(respond) {
    return {
      type: UPDATE_NFT_TRENDING_SUCCESS,
      respond,
    };
  }
export function updateNftTrendingError(error) {
    return {
      type: UPDATE_NFT_TRENDING_ERROR,
      error,
    };
  }
