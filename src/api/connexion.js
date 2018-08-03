import axios from 'axios';

// POST - Test connexion to BDD
const postConnectId = function $postConnectId(data) {
  const opt = {
    method: 'post',
    data,
    url: 'https://api.hepic.fr/auth/login',
  };
  return axios(opt);
};

export default {
  postConnectId,
};
