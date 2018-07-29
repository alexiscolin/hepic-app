import api from '@/api/connexion';

// ACTION
const actions = {
  getToken({ commit }, data) {
    return new Promise((resolve, reject) => {
      api.postConnectId(data).then((res) => {
        commit('info');
        console.log(res);
        resolve(res);
      }, (error) => {
        console.log(error);
        reject(error);
      });
    });
  },
};

// MUTATIONS
const mutations = {
};

// STATE
const state = {
  contest: {
    brand: null,
    logo: null,
    desc: null,
    ban: null,
    agreement: null,
  },
};

export default {
  state,
  mutations,
  actions,
};
