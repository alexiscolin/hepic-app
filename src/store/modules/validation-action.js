// import axios from 'axios';
// import api from '@/api/connexion';

// ACTION
const actions = {
  // effectuer une action api suite à un optin
  optinAction: ({ dispatch, state }) => {
    switch (state.type) {
      case 'signalPhoto':
        if (state.active) {
          dispatch('postSignal', state.data).then(() => {
            state.text = state.cbText;
            state.color = 'green';
            state.active = false;
            dispatch('breakPopin');
          });
        }
        break;

      default:
        console.log('error: no type action involved!');
    }
  },

  // faire disparaitre opt-in après un délais
  breakPopin: ({ commit }, time = 2000) => {
    setTimeout(() => {
      commit('hideOptin');
    }, time);
  },
};

// MUTATIONS
const mutations = {
  // afficher optin
  dispayOptin: (state, payload) => {
    state.displayed = !state.displayed && true;
    state.text = payload && payload.reqText ? payload.reqText : '';
    state.cbText = payload && payload.cbText ? payload.cbText : 'Action effectuée';
    state.type = payload && payload.type ? payload.type : false;
    state.color = payload && payload.color ? payload.color : 'red';
    state.data = payload && payload.data ? payload.data : null;
    state.active = true;
  },
  // faire disparaitre optin
  hideOptin: (state) => {
    state.displayed = false;
    state.text = '';
    state.type = false;
  },
};

// GUETTERS
const getters = {
  colorCSS: (state) => {
    const color = state.color === 'green' ? 'f-green' : 'f-red';
    return color;
  },
};

// STATE
const state = {
  text: '',
  cbText: 'Action effectuée',
  type: false,
  color: 'red',
  displayed: false,
  active: true,
  data: null,
};

export default {
  state,
  getters,
  mutations,
  actions,
};
