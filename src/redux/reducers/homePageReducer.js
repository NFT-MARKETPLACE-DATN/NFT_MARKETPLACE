import {FETCH_DATA} from "../constants/homePageConstant";

const initialState = {
    account:null,
    walllet:false
};

const homePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                account: action.payload,
                walllet: true,
            };
        default:
            return state;
    }
};

export default homePageReducer;
