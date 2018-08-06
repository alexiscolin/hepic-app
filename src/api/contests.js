import axios from 'axios';
import endpoints from './config';

// GET - info contests
const GET_CONTESTS = function $GET_CONTESTS() {
  return axios.get(endpoints.get('getContests'));
};

// GET - info contest
const GET_CONTEST = function $GET_CONTEST(id) {
  return axios.get(endpoints.get('getContest') + id);
};

// GET - contest photos list
const GET_CONTEST_PHOTOS = function $GET_CONTEST_PHOTOS(id) {
  return axios.get(endpoints.get('getContestPhotos') + id);
};

// GET - contest photos list
const GET_CONTEST_RULES = function $GET_CONTEST_RULES(id) {
  return axios.get(endpoints.get('getContestRules') + id);
};

// POST - contest picture
const POST_CONTEST_PHOTO = function $POST_CONTEST_PHOTO(data) {
  const opt = {
    method: 'post',
    headers: { 'Content-Type': 'multipart/form-data' },
    data,
    url: endpoints.get('postContestPhoto'),
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
