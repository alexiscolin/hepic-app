// import axios from 'axios';
import api from '@/api/contests';

// ACTION
const actions = {
  getContests: ({ commit }, data) => new Promise((resolve, reject) => {
    api.GET_CONTESTS(data).then((res) => {
      console.log(res.data);
      commit('setContests', res.data);
      resolve(res);
    }).catch((res) => {
      reject(res);
    });
  }),
};

// MUTATIONS
const mutations = {
  setContests: (state, contests) => {
    state.all = contests;
  },
};

// STATE
const state = {
  all: [],
};

export default {
  state,
  mutations,
  actions,
};
