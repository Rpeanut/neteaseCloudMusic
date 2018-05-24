import { createStore, applyMiddleware } from 'redux';
import createPromise from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import navigationReduxMiddle from '../middlewares/navigationRedux';
import rootReducer from '../reducers';

const promiseMiddleWare = createPromise({
  promiseTypeSuffixes: ['PENDING', 'SUCCESS', 'ERROR'],
});

// 根据不同环境加载所需的 middlewares
let middlewares;
if (process.env.NODE_ENV === 'production') {
  middlewares = [thunkMiddleware, promiseMiddleWare, navigationReduxMiddle];
} else {
  const logger = createLogger({
    level: 'info',
    duration: true,
    collapsed: true,
  });
  middlewares = [thunkMiddleware, promiseMiddleWare, navigationReduxMiddle, logger];
}

export default function configureStore(initialState = {}) {
  const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));
  store.asyncReducers = {};
  return store;
}
