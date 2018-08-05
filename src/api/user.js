import axios from 'axios';

const HEPIC_URL = 'https://api.hepic.fr';

// GET - info contests
const GET_USER_PHOTOS = function $GET_USER_PHOTOS(id) {
  return axios.get(`${HEPIC_URL}/photos/by_profile/${id}`);
};

export default {
  GET_USER_PHOTOS,
};
