import {SET_WALLET} from "../constants/homePageConstant";

const initialState = {
    account:null,
    wallet:false
};

const homePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WALLET:
            return {
                ...state,
                account: action.data,
                wallet: true,
            };
        default:
            return state;
    }
};

export default homePageReducer;
