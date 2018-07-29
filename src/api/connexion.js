import axios from 'axios';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

// POST - Test connexion to BDD
const postConnectId = function $postConnectId(data) {
  const opt = {
    method: 'post',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'crossDomain': true,
    },
    data,
    url: 'https://api.hepic.fr/auth/login',
  };
  return axios(opt);
};

export default {
  postConnectId,
};
