import {API_BASE_URL} from '../config';
import * as catActions from './cat';
import * as dogActions from './dog';

export const fetchPets = () => dispatch => {
  dispatch(catActions.fetchCatRequest());
  dispatch(dogActions.fetchDogRequest());
  fetch(`${API_BASE_URL}`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(pets => {
      dispatch(catActions.fetchCatSuccess(pets[0]));
      dispatch(dogActions.fetchDogSuccess(pets[1]));
    })
    .catch(err => {
      dispatch(catActions.fetchCatError());
      dispatch(dogActions.fetchDogError());
    });
};

export { catActions, dogActions }
