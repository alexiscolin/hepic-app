import axios from 'axios';

const HEPIC_URL = 'https://api.hepic.fr';

// GET - info contests
const GET_CONTESTS = function $GET_CONTESTS() {
  return axios.get(`${HEPIC_URL}/contests/`);
};

// GET - info contest
const GET_CONTEST = function $GET_CONTEST(id) {
  return axios.get(`${HEPIC_URL}/contest/${id}`);
};

// GET - contest photos list
const GET_CONTEST_PHOTOS = function $GET_CONTEST_PHOTOS(id) {
  return axios.get(`${HEPIC_URL}/photos/by_contest/${id}`);
};

// GET - contest photos list
const GET_CONTEST_RULES = function $GET_CONTEST_RULES(id) {
  return axios.get(`${HEPIC_URL}/rules/${id}`);
};

// POST - contest picture
const POST_CONTEST_PHOTO = function $POST_CONTEST_PHOTO(data) {
  const opt = {
    method: 'post',
    headers: { 'Content-Type': 'multipart/form-data' },
    data,
    url: `${HEPIC_URL}/photos/`,
  };
  return axios(opt);
};

export default {
  POST_CONTEST_PHOTO,
  GET_CONTESTS,
  GET_CONTEST,
  GET_CONTEST_PHOTOS,
  GET_CONTEST_RULES,
};
