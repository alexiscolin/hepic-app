import axios from 'axios';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

// POST - Test connexion to BDD
const postConnectId = function $postConnectId(data) {
  const opt = {
    method: 'post',
    headers: {
      'Access-Control-Allow-Origin': 'http://192.168.1.15:8080/',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
    data,
    url: 'https://api.hepic.fr/auth/login',
  };
  return axios(opt);
};

export default {
  postConnectId,
};
