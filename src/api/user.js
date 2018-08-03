import axios from 'axios';

// GET - info contests
const GET_USER_PHOTOS = function $GET_USER_PHOTOS() {
  return axios.get('https://api.hepic.fr/contests/');
};

export default {
  GET_USER_PHOTOS,
};
