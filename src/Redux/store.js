import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { music, about } from './reducers';

const rootReducer = combineReducers({
    music,
    about,
});

const loggerMiddleware = createLogger()

const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
);

export default store;