// store/rootReducer.js
import { combineReducers } from 'redux';
import homePageReducer from '../reducers/homePageReducer';

const rootReducer = combineReducers({
    dataHomePage: homePageReducer,
    // Add other reducers here if any
});

export default rootReducer;