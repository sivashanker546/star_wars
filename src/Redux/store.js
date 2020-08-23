import {createStore, applyMiddleware,compose} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './Reducers/rootReducer';
//we can pass array of middlewares
const middlewares = [logger, thunk];

const store = createStore(rootReducer,compose(applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;