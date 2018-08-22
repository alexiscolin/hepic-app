import api from '@/api/connexion';

// ACTION
const actions = {
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
    state.contest.agreement = false;
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
