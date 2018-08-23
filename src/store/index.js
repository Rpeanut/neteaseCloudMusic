import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import navigationReduxMiddle from '../middlewares/navigationRedux';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

// 根据不同环境加载所需的 middlewares
const sagaMiddleware = createSagaMiddleware();
let middlewares;
if (process.env.NODE_ENV === 'production') {
  middlewares = [navigationReduxMiddle, sagaMiddleware];
} else {
  const logger = createLogger({
    level: 'info',
    duration: true,
    collapsed: true,
  });
  middlewares = [navigationReduxMiddle, sagaMiddleware, logger];
}

export default function configureStore(initialState = {}) {
  const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));
  sagaMiddleware.run(rootSaga);
  store.asyncReducers = {};
  return store;
}
