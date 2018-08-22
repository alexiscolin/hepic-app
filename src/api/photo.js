import axios from 'axios';
import endpoints from './api.config';

// GET - photo
const GET_PHOTO = function $GET_PHOTO(id) {
  return axios.get(endpoints.get('getPhoto') + id);
};

const DELETE_PHOTO = function $DELETE_PHOTO(id) {
  return axios.delete(endpoints.get('getPhoto') + id);
};

export default {
  GET_PHOTO,
  DELETE_PHOTO,
};
