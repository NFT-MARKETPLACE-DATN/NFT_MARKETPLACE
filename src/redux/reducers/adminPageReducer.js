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
} from "../constants/index";

const initialState = {
    loading: false,
    dataUser:[],
    // totalRecordsNft:0,
    dataNft:[],
    isUpdateStatus:false
};

const adminPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_BY_ADMIN_PENDING:
            return{
                ...state,
                loading:true,
                dataUser:null
            }
        case GET_USER_BY_ADMIN_SUCCESS:
            return{
                ...state,
                loading:false,
                dataUser:action.respond.data,
            }
        case GET_USER_BY_ADMIN_ERROR:
            return{
                ...state,
                loading:false,
                dataUser:[]
            }
        case UPDATE_ROLE_USER_PENDING:
            return{
                ...state,
                loading:true,
            }
        case UPDATE_ROLE_USER_SUCCESS:
            return{
                ...state,
                loading:false,
            }
        case UPDATE_ROLE_USER_ERROR:
            return{
               ...state,
                loading:false,
            }
        case GET_NFT_BY_ADMIN_PENDING:
            return{
                ...state,
                loading:true,
                dataNft:null
            }
        case GET_NFT_BY_ADMIN_SUCCESS:
            return{
                ...state,
                loading:false,
                dataNft:action.respond.data,
            }
        case GET_NFT_BY_ADMIN_ERROR:
            return{
                ...state,
                loading:false,
                dataNft:[]
            }
        case UPDATE_NFT_TRENDING_PENDING:
            return{
                ...state,
                loading:true,
                isUpdateStatus:false,
            }
        case UPDATE_NFT_TRENDING_SUCCESS:
            return{
                ...state,
                loading:false,
                isUpdateStatus:true,
            }
        case UPDATE_NFT_TRENDING_ERROR:
            return{
               ...state,
                loading:false,
                isUpdateStatus:false,
            }

        default:
            return state;
    }
};

export default adminPageReducer;
