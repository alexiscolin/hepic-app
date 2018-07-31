// import axios from 'axios';
// import api from '@/api/connexion';

// ACTION
const actions = {
  optinAction: ({ state }) => {
    console.log(state.type);
  },
};

// MUTATIONS
const mutations = {
  dispayOptin: (state, payload) => {
    state.displayed = !state.displayed && true;
    state.text = payload ? payload.text : '';
    state.type = payload ? payload.type : false;
  },
  hideOptin: (state) => {
    state.displayed = false;
    state.text = '';
    state.type = false;
  },
};

// STATE
const state = {
  text: '',
  type: false,
  displayed: false,
};

export default {
  state,
  mutations,
  actions,
};
