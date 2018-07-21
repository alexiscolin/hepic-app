import axios from 'axios';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

// GET - info contest
const getContestInfo = function getContestInfo(data) {
  return axios.get('https://api.coindesk.com/v1/bpi/currentprice.json', { params: data });
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
  getContestInfo,
};
