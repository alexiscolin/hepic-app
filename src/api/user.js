import axios from 'axios';
import endpoints from './api.config';

// GET - photos list
const GET_USER_PHOTOS = function $GET_USER_PHOTOS(id) {
  return axios.get(endpoints.get('getUserPhotos') + id);
};

// GET - info profile
const GET_USER_PROFILE = function $GET_USER_PROFILE(id) {
  return axios.get(endpoints.get('getUserProfile') + id);
};

export default {
  GET_USER_PROFILE,
  GET_USER_PHOTOS,
};
