// store/rootReducer.js
import { combineReducers } from 'redux';
import homePageReducer from '../reducers/homePageReducer';
import accountPageReducer from '../reducers/accountPageReducer';
import nftPageReducer from '../reducers/nftPageReducer';
import adminPageReducer from '../reducers/adminPageReducer';
// import {homePageReducer} from "../reducers/index";

const rootReducer = combineReducers({
    globalState: homePageReducer,
    accountState:accountPageReducer,
    nftState:nftPageReducer,
    adminState:adminPageReducer
    // Add other reducers here if any
});

export default rootReducer;