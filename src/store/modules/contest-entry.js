import api from '@/api/connexion';

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
    state.contest.brand = contest.brandName;
    state.contest.logo = contest.logo;
    state.contest.desc = contest.desc;
    state.contest.ban = contest.ban;
    state.contest.id = contest.id;
    state.contest.agreement = contest.agreement;
  },

  eraseAgreement(state) {
    window.console.log('erase now');
    Object.keys(state.contest).forEach((v) => { state.contest[v] = null; });
    window.console.log(state.contest);
  },
};

// GETTERS
const getters = {
  getAgreement: state => state.contest.agreement,
};

// STATE
const state = {
  contest: {
    brand: null,
    logo: null,
    desc: null,
    id: null,
    ban: null,
    agreement: null,
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
