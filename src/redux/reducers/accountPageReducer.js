import {
    GET_NFT_BY_USER_PENDING,
    GET_NFT_BY_USER_SUCCESS,
    GET_NFT_BY_USER_ERROR,
    GET_TRANSACTION_BY_USER_PENDING,
    GET_TRANSACTION_BY_USER_SUCCESS,
    GET_TRANSACTION_BY_USER_ERROR
} from "../constants";

const initialState = {
    loading: false,
    dataNftHolding:[],
    totalRecordsNft:0,
    dataTransacitonUser:[],
};
const accountPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NFT_BY_USER_PENDING:
            return{
                ...state,
                loading:true,
            }
        case GET_NFT_BY_USER_SUCCESS:
            return{
                ...state,
                loading:false,
                totalRecordsNft:action.respond.data.totalRecord,
                dataNftHolding:action.respond.data.records
            }
        case GET_NFT_BY_USER_ERROR:
            return{
                ...state,
                loading:false,
                totalRecordsNft:0,
                dataNftHolding:[]
            }

        case GET_TRANSACTION_BY_USER_PENDING:
            return{
                ...state,
                loading:true,
                dataTransacitonUser:null
            }
        case GET_TRANSACTION_BY_USER_SUCCESS:
            return{
                ...state,
                loading:false,
                dataTransacitonUser:action.respond.data.records
            }
        case GET_TRANSACTION_BY_USER_ERROR:
            return{
                ...state,
                loading:false,
                dataTransacitonUser:[]
            }
        default:
            return state;
    }
};

export default accountPageReducer;
