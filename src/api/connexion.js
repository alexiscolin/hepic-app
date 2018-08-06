import axios from 'axios';
import endpoints from './api.config';

// POST - Test connexion to BDD
const postConnectId = function $postConnectId(data) {
  const opt = {
    method: 'post',
    data,
    url: endpoints.get('getToken'),
  };
  return axios(opt);
};

export default {
  postConnectId,
};
