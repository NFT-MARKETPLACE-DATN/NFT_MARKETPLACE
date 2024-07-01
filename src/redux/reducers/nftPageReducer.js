import {
    GET_NFT_INFO_PENDING,
    GET_NFT_INFO_SUCCESS,
    GET_NFT_INFO_ERROR
} from "../constants/index";

const initialState = {
    loading: false,
    nftInfo : {}
};
const nftPageReducer = (state = initialState, action)=>{
    switch (action.type) {
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
        default:
            return state;
    }
}
export default nftPageReducer;