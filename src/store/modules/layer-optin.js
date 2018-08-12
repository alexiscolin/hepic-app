// func util pour le dispatch
const dispatchAction = function $dispatchAction(dispatch, state, entry) {
  if (state.active) {
    dispatch(entry, state.data).then(() => {
      state.text = state.cbText;
      state.color = 'green';
      state.active = false;
      dispatch('breakPopin');
    }).catch((error) => {
      console.log(error);
      state.text = 'Une erreur est survenue';
      state.color = 'red';
      state.active = false;
      dispatch('breakPopin');
    });
  }
};

// ACTION
const actions = {
  // effectuer une action api suite à un optin
  optinAction: ({ dispatch, state }) => {
    switch (state.type) {
      case 'votePhoto':
        dispatchAction(dispatch, state, 'postVote');
        break;
      case 'reportPhoto':
        dispatchAction(dispatch, state, 'postReport');
        break;
      case 'deletePhoto':
        dispatchAction(dispatch, state, 'deletePhoto');
        break;
      default:
        console.log('error: no type action involved!');
    }
  },

  // faire disparaitre opt-in après un délais
  breakPopin: ({ commit, state }, time = 2000) => {
    setTimeout(() => {
      state.central ? commit('popinDisplay') : commit('hideOptin'); // effacer la popin ou optin
    }, time);
  },
};

// MUTATIONS
const mutations = {
  // afficher optin
  displayOptin: (state, payload) => {
    state.displayed = !state.displayed && true;
    state.text = payload && payload.reqText ? payload.reqText : '';
    state.cbText = payload && payload.cbText ? payload.cbText : 'Action effectuée';
    state.type = payload && payload.type ? payload.type : false;
    state.color = payload && payload.color ? payload.color : 'red';
    state.central = payload && payload.central ? payload.central : false;
    state.data = payload && payload.data ? payload.data : null;

    state.active = true;

    // state pour le vote -> middle
    state.color = state.central && 'grad';
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
    let color = 'f-red';
    if (state.color === 'green') {
      color = 'f-green';
    } else if (state.color === 'grad') {
      color = 'c-grad-yo';
    }
    return color;
  },
  zoneCSS: state => state.central && 'p-vhcenter-abs p-bot-0',
};

// STATE
const state = {
  text: 'Effectuer',
  cbText: 'Action effectuée',
  type: false,
  color: 'red',
  displayed: false,
  active: true,
  central: false,
  data: null,
};

export default {
  state,
  getters,
  mutations,
  actions,
};
