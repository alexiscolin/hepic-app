// import axios from 'axios';
// import api from '@/api/connexion';

// ACTION
const actions = {
  postSignal: ({ state }, data) => {
    console.log(data.id);
    state.send = true; // utile le send ?
  },
};

// MUTATIONS
const mutations = {

};

// STATE
const state = {
  send: '',
};

export default {
  state,
  mutations,
  actions,
};
