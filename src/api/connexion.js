import axios from 'axios';

const HEPIC_URL = 'https://api.hepic.fr';

// POST - Test connexion to BDD
const postConnectId = function $postConnectId(data) {
  const opt = {
    method: 'post',
    data,
    url: `${HEPIC_URL}/auth/login`,
  };
  return axios(opt);
};

export default {
  postConnectId,
};
