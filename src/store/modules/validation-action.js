// import axios from 'axios';
// import api from '@/api/connexion';

// ACTION
const actions = {

};

// MUTATIONS
const mutations = {
  dispayOptin: (state, payload) => {
    state.text = payload.text;
    state.displayed = !state.displayed && true;
  },
};

// STATE
const state = {
  text: '',
  displayed: false,
};

export default {
  state,
  mutations,
  actions,
};
