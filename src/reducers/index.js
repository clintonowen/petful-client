import { combineReducers } from 'redux';
import { catReducer } from './cat';
import { dogReducer } from './dog';

export const petReducer = combineReducers({
  cat: catReducer,
  dog: dogReducer
});
