import axios from 'axios';
import endpoints from './config';

// GET - photo
const GET_PHOTO = function $GET_PHOTO(id) {
  return axios.get(endpoints.get('getPhoto') + id);
};
