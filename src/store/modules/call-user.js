// import axios from 'axios';
import api from '@/api/user';
import apiPromise from '@/utils/api-promise';
import findBy from '@/utils/find-by';


// ACTION
const actions = {
  getUserPhotos: ({ commit }, id) => {
    commit('eraseUserPhotos');
    apiPromise(api.GET_USER_PHOTOS(id), 'setUserPhotos', commit);
  },
  getUserProfil: ({ commit }, id) => {
    commit('eraseUserProfile');
    apiPromise(api.GET_USER_PROFILE(id), 'setUserProfile', commit);
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
  setUserProfile: (state, infos) => {
    state.userProfile = infos;
  },
  eraseUserProfile: (state) => {
    state.userProfile = {};
  },
};

// GETTERS
const getters = {
  getUserPhotos: state => state.userPhotos,
  getUserPhotoById: state => id => findBy(state.userPhotos, id),
  getUserProfil: state => state.userProfile,
};

// STATE
const state = {
  userProfile: null,
  userPhotos: [],
};

export default {
  state,
  getters,
  mutations,
  actions,
};
