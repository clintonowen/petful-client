import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import { petReducer } from './reducers';

export default createStore(
  petReducer,
  applyMiddleware(thunk)
);
