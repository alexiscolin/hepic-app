// MUTATIONS
const mutations = {
  popinDisplay(state) {
    state.displayed = !state.displayed === true;
  },
  popinHide(state) {
    state.displayed = false;
  },
};

// STATE
const state = {
  displayed: false,
};

export default {
  state,
  mutations,
};
