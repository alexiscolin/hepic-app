// import axios from 'axios';
// import api from '@/api/connexion';

// ACTION
const actions = {
  optinAction: ({ dispatch, commit, state }) => {
    switch (state.type) {
      case 'signalPhoto':
        dispatch('postSignal', state.data).then(() => {
          commit('hideOptin');
        });
        break;

      default:
        console.log('error: no type action involved!');
    }
  },
};

// MUTATIONS
const mutations = {
  dispayOptin: (state, payload) => {
    state.displayed = !state.displayed && true;
    state.text = payload ? payload.text : '';
    state.type = payload ? payload.type : false;
    state.data = payload ? payload.data : null;
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
  data: null,
};

export default {
  state,
  mutations,
  actions,
};
