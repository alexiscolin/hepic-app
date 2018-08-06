// import axios from 'axios';
import api from '@/api/photo';
import apiPromise from '@/utils/api-promise';

// ACTION
const actions = {
  getPhoto: ({ commit }, id) => {
    commit('erasePhoto');
    apiPromise(api.GET_PHOTO(id), 'setPhoto', commit);
  },
};

// MUTATIONS
const mutations = {
  setPhoto: (state, photo) => {
    state.photo = photo;
  },
  erasePhoto: (state) => {
    state.photo = [];
  },
};

// GETTERS
const getters = {
  getPhoto: state => state.photo,
};

// STATE
const state = {
  photo: {},
};

export default {
  state,
  getters,
  mutations,
  actions,
};
