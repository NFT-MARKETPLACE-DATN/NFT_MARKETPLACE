import {
  SET_WALLET,
  SET_LOGIN
} from "../constants/homePageConstant";

export const setWallet = (data) => ({
  type: SET_WALLET,
  data
})
export const setLogin = (data) => ({
  type: SET_LOGIN,
  data
})
