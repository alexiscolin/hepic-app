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

// GET - config CGU
const GET_USER_CGU = function $GET_USER_PROFILE() {
  return axios.get(endpoints.get('getConfigCGU'));
};

// POST - Message to contact admin
const POST_CONTACT_MESSAGE = function $POST_CONTACT_MESSAGE(data) {
  const opt = {
    method: 'post',
    headers: { 'Content-Type': 'multipart/form-data' },
    data,
    url: endpoints.get('postContactMessage'),
  };
  return axios(opt);
};

export default {
  GET_USER_PROFILE,
  GET_USER_PHOTOS,
  POST_CONTACT_MESSAGE,
  GET_USER_CGU,
};
