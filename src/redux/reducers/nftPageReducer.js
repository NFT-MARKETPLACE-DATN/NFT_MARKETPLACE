import {
    GET_NFT_INFO_PENDING,
    GET_NFT_INFO_SUCCESS,
    GET_NFT_INFO_ERROR,
    SYNC_NFT_MARKET_PENDING,
    SYNC_NFT_MARKET_SUCCESS,
    SYNC_NFT_MARKET_ERROR,
    // SET_LOADING,
    BUY_NFT_BY_USER_PENDING,
    BUY_NFT_BY_USER_SUCCESS,
    BUY_NFT_BY_USER_ERROR,
    SET_LOADING_NFT
} from "../constants/index";

const initialState = {
    loading: false,
    nftInfo : {}
};
const nftPageReducer = (state = initialState, action)=>{
    switch (action.type) {
        case SET_LOADING_NFT:
            return{
                ...state,
                loading:action.data
            };
        case GET_NFT_INFO_PENDING:
            return{
                ...state,
                loading:true,
                nftInfo:null,
            }
        case GET_NFT_INFO_SUCCESS:
            return{
                ...state,
                loading: false,
                nftInfo:action.respond.data
            }
        case GET_NFT_INFO_ERROR:
            return{
                ...state,
                loading: false,
                nftInfo:{}
            }
        case SYNC_NFT_MARKET_PENDING:
            return{
                ...state,
                loading:true,
            }
        case SYNC_NFT_MARKET_SUCCESS:
            return{
                ...state,
                loading: false,
            }
        case SYNC_NFT_MARKET_ERROR:
            return{
                ...state,
                loading: false,
            }
        case BUY_NFT_BY_USER_PENDING:
            return{
                ...state,
            }   
        case BUY_NFT_BY_USER_SUCCESS:
            return{
                ...state,
                loading: false,
            }
        case BUY_NFT_BY_USER_ERROR:
            return{
                ...state,
                loading: false,
            }
        default:
            return state;
    }
}
export default nftPageReducer;