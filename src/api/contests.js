import axios from 'axios';

// GET - info contests
const GET_CONTESTS = function $GET_CONTESTS() {
  return axios.get('https://api.hepic.fr/contests/');
};

// GET - info contest
const GET_CONTEST = function $GET_CONTEST(id) {
  return axios.get(`https://api.hepic.fr/contest/${id}`);
};

// GET - contest photos list
const GET_CONTEST_PHOTOS = function $GET_CONTEST_PHOTOS(id) {
  return axios.get(`https://api.hepic.fr/photos/by_contest/${id}`);
};

// GET - contest photos list
const GET_CONTEST_RULES = function $GET_CONTEST_RULES(id) {
  return axios.get(`https://api.hepic.fr/rules/${id}`);
};

// POST - contest picture
const postContestPicture = function postContestPicture(data) {
  const opt = {
    method: 'post',
    headers: { 'Content-Type': 'multipart/form-data' },
    data,
    url: 'http://ptsv2.com/t/5ipu6-1532204830/post',
  };
  return axios(opt);
};

export default {
  postContestPicture,
  GET_CONTESTS,
  GET_CONTEST,
  GET_CONTEST_PHOTOS,
  GET_CONTEST_RULES,
};
