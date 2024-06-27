// store/rootReducer.js
import { combineReducers } from 'redux';
import homePageReducer from '../reducers/homePageReducer';
// import {homePageReducer} from "../reducers/index";

const rootReducer = combineReducers({
    globalState: homePageReducer,
    // Add other reducers here if any
});

export default rootReducer;