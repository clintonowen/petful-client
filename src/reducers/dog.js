import { dogActions } from '../actions';

const inititalState = {
  data: null,
  error: null,
  loading: false
}

export const dogReducer = (state=inititalState, action) => {
  if (action.type === dogActions.FETCH_DOG_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    });
  }
  else if (action.type === dogActions.FETCH_DOG_SUCCESS) {
    return Object.assign({}, state, {
      data: action.dog,
      loading: false
    });
  }
  else if (action.type === dogActions.FETCH_DOG_ERROR) {
    return Object.assign({}, state, {
      data: null,
      error: action.error,
      loading: false
    });
  }
  else if (action.type === dogActions.ADOPT_DOG_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    });
  }
  else if (action.type === dogActions.ADOPT_DOG_SUCCESS) {
    return Object.assign({}, state, {
      loading: false
    });
  }
  else if (action.type === dogActions.ADOPT_DOG_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  }
  return state;
}
