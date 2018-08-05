
import axios from 'axios';

const HEPIC_URL = 'https://api.hepic.fr';

// // GET - info contests
// const GET_CONTESTS = function $GET_CONTESTS() {
//   return axios.get('https://api.hepic.fr/contests/');
// };
//
// // GET - info contest
// const GET_CONTEST = function $GET_CONTEST(id) {
//   return axios.get(`https://api.hepic.fr/contest/${id}`);
// };
//
// // GET - contest photos list
// const GET_CONTEST_PHOTOS = function GET_CONTEST_PHOTOS(id) {
//   return axios.get(`https://api.hepic.fr/photos/by_contest/${id}`);
// };

// POST - contest picture
const POST_PHOTO_VOTE = function $POST_PHOTO_VOTE(data) {
  const opt = {
    method: 'post',
    headers: { 'Content-Type': 'multipart/form-data' },
    data,
    url: `${HEPIC_URL}/5ipu6-1532204830/post`,
  };
  return axios(opt);
};

export default {
  POST_PHOTO_VOTE,
};
