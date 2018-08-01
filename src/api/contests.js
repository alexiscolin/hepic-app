import axios from 'axios';

// GET - info contest
const GET_CONTESTS = function getContestInfo() {
  return axios.get('https://api.hepic.fr/contests/');
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
};
