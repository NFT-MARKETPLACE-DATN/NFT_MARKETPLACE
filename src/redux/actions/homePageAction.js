import {FETCH_DATA} from "../constants/homePageConstant";

export const fetchDatas = (data) => ({
  type: FETCH_DATA,
  data
})
