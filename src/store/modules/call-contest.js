// import axios from 'axios';
import api from '@/api/contests';

// ACTION
const actions = {
  getContests: ({ commit }, data) => new Promise((resolve, reject) => {
    api.GET_CONTESTS(data).then((res) => {
      commit('setContests', res.data);
      resolve(res);
    }).catch((res) => {
      reject(res);
    });
  }),
  getContest: ({ commit }, id) => new Promise((resolve, reject) => {
    api.GET_CONTEST(id).then((res) => {
      console.log(res.data);
      commit('setContest', res.data);
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
  setContest: (state, contest) => {
    state.contest = contest;
  },
  eraseContest: (state) => {
    state.contest = {};
  },
};

// GETTERS
const getters = {
  getContest: state => id => state.all.find(contest => contest.id === parseInt(id, 10)),
};

// STATE
const state = {
  all: [],
  contest: {},
};

export default {
  state,
  getters,
  mutations,
  actions,
};
