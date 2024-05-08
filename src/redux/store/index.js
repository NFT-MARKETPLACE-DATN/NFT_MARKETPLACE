import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer'; // Import your combined reducers
import rootSaga from '../sagas'; // Import your root saga
import { composeWithDevTools } from 'redux-devtools-extension';

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create Redux store with middleware
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )

);

// Run the root saga
sagaMiddleware.run(rootSaga);

export default store;