// import axios from 'axios';
import api from '@/api/user';
import apiPromise from '@/utils/api-promise';

// ACTION
const actions = {
  getUserPhotos: ({ commit }, id) => {
    commit('eraseUserPhotos');
    apiPromise(api.GET_USER_PHOTOS(id), 'setUserPhotos', commit);
  },
};

// MUTATIONS
const mutations = {
  setUserPhotos: (state, photos) => {
    state.userPhotos = photos;
  },
  eraseUserPhotos: (state) => {
    state.userPhotos = [];
  },
};

// GETTERS
const getters = {
  getUserPhotos: state => state.userPhotos,
};

// STATE
const state = {
  userPhotos: [],
};

export default {
  state,
  getters,
  mutations,
  actions,
};
