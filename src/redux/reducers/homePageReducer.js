import {
    SET_WALLET,
    SET_LOGIN
} from "../constants/homePageConstant";

const initialState = {
    account:null,
    isLogin:false
};

const homePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WALLET:
            return {
                ...state,
                account: action.data,
            };
        case SET_LOGIN:
            return{
                ...state,
                isLogin:action.data
            }
        default:
            return state;
    }
};

export default homePageReducer;
