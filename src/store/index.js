import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunkMiddleware from 'redux-thunk';

import newsReducer from './states/news/reducer';

const debug = process.env.NODE_ENV !== 'production';

const bindMiddleware = (middleware) => {
  if (debug) {
    return composeWithDevTools(applyMiddleware(middleware));
  }
  return applyMiddleware(middleware);
};

const rootReducer = combineReducers({
  news: newsReducer,
});

const store = createStore(rootReducer, bindMiddleware(thunkMiddleware));

export default store;
