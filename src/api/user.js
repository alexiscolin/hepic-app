import axios from 'axios';

// GET - info contests
const GET_USER_PHOTOS = function $GET_USER_PHOTOS(id) {
  return axios.get(`https://api.hepic.fr/photos/by_profile/${id}`);
};

export default {
  GET_USER_PHOTOS,
};
