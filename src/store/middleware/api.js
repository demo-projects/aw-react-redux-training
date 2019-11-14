import { API_REQUEST } from "../actions/api";

const API_URL = 'https://jsonplaceholder.typicode.com';

export const api = ({ getState, dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === API_REQUEST) {
    const { method, url, onSuccess } = action.meta;

    fetch(API_URL + url, { method })
      .then(result => result.json())
      .then(response => {
        onSuccess(response)
      })
  }

}