import api from '@/api/contests';

// ACTION
const actions = {
  // POST - picture et data
  postPicture({ commit }, data) {
    return new Promise((resolve, reject) => {
      api.postContestPicture(data).then((res) => {
        commit('eraseState');
        resolve(res);
      }, (error) => {
        reject(error);
      });
    });

    // api.getContestInfo();
  },

  // GET - infos sur le contest
  getInfos({ commit }, data) {
    return new Promise((resolve, reject) => {
      api.getContestInfo(data, (res) => {
        commit('populateState', res);
        resolve(res);
      }, (error) => {
        reject(error);
      });
    });
  },
};

// MUTATIONS
const mutations = {
  populateState(state, contest) {
    state.contest.brand = contest.brand;
    state.contest.logo = contest.logo;
    state.contest.desc = contest.desc;
    state.contest.ban = contest.ban;
    state.contest.agreement = contest.agreement;
  },

  eraseState(state) {
    window.console.log('erase now');
    Object.keys(state.contest).forEach((v) => { state.contest[v] = null; });
    window.console.log(state.contest);
  },
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
