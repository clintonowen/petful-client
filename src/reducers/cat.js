import { catActions } from '../actions';

const inititalState = {
  data: null,
  error: null,
  loading: false
}

export const catReducer = (state=inititalState, action) => {
  if (action.type === catActions.FETCH_CAT_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    });
  }
  else if (action.type === catActions.FETCH_CAT_SUCCESS) {
    return Object.assign({}, state, {
      data: action.cat,
      loading: false
    });
  }
  else if (action.type === catActions.FETCH_CAT_ERROR) {
    return Object.assign({}, state, {
      data: null,
      error: action.error,
      loading: false
    });
  }
  else if (action.type === catActions.ADOPT_CAT_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    });
  }
  else if (action.type === catActions.ADOPT_CAT_SUCCESS) {
    return Object.assign({}, state, {
      loading: false
    });
  }
  else if (action.type === catActions.ADOPT_CAT_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  }
  return state;
}
