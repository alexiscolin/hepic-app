import axios from 'axios';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

// GET - info contest
const getContestInfo = function getContestInfo(data) {
  return axios.get('https://api.coindesk.com/v1/bpi/currentprice.json', { params: data });
};

// POST - contest picture
const postContestPicture = function postContestPicture(data) {
  return axios.post('http://ptsv2.com/t/5ipu6-1532204830/post', data);
};

export default {
  postContestPicture,
  getContestInfo,
};
