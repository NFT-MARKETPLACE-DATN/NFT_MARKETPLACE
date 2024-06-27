import {
    SET_WALLET,
    SET_LOGIN,
    LOGIN_PENDING,
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from "../constants/index";

const initialState = {
    account:null,
    isLogin:false,
    accountInfo:{},
    loading: false,
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
        case LOGIN_PENDING:
            return{
                ...state,
                loading:true,
                accountInfo:{}
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                loading:false,
                accountInfo: action.respond.data,
                account:action.respond.data.address
            }
        case LOGIN_ERROR:
            return{
                ...state,
                loading:false,
                accountInfo:{}
            }
        default:
            return state;
    }
};

export default homePageReducer;
