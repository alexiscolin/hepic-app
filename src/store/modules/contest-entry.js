const mutations = {
  populateState(state, contest) {
    state.contest.brand = contest.brand;
    state.contest.logo = contest.logo;
    state.contest.desc = contest.desc;
    state.contest.ban = contest.ban;
    state.contest.agreement = contest.agreement;
  },

  eraseState(state) {
    Object.keys(state).forEach((v) => { state[v] = null; });
  },
};

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
};
