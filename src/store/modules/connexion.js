import axios from 'axios';
import api from '@/api/connexion';

// ACTION
const actions = {
  getToken({ commit }, data) { // récupération token sur API
    return new Promise((resolve, reject) => {
      commit('authRequest');
      api.postConnectId(data).then((res) => {
        const { data: user, data: { token } } = res;
        user.picture = 'https://d33wubrfki0l68.cloudfront.net/0e5ec5090712c1a4595c4d637f47212df25aa696/f852a/assets/img/profil/julie.jpg';
        localStorage.setItem('user-token', token); // rec token
        localStorage.setItem('user-data', JSON.stringify(user)); // rec datas

        console.log(JSON.parse(localStorage.getItem('user-data')));

        axios.defaults.headers.common.Authorization = `Token ${token}`;
        commit('authSuccess', token);
        resolve(res);
      }, (error) => {
        commit('authError', error);
        localStorage.removeItem('user-token'); // destruction token en erreur
        reject(error);
      });
    });
  },
  logout: ({ commit }) => new Promise((resolve) => {
    commit('authLogout');
    localStorage.removeItem('user-token'); // desctruction token
    localStorage.removeItem('user-data'); // desctruction infos utilisateur
    delete axios.defaults.headers.common.Authorization;
    resolve(); // on redirige sur la vue
  }),
};

// MUTATIONS
const mutations = {
  authRequest: (state) => {
    state.status = 'loading';
  },
  authSuccess: (state, token) => {
    state.status = 'success';
    state.token = token;
  },
  authError: (state) => {
    state.status = 'error';
  },
  authLogout: (state) => {
    state.token = '';
  },
};

// GETTERS
const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status,
  authToken: state => state.token,
};

// STATE
const state = {
  token: localStorage.getItem('user-token') || '',
  status: '',
};

export default {
  state,
  getters,
  mutations,
  actions,
};
