// import axios from 'axios';
import api from '@/api/user';
import apiPromise from '@/utils/api-promise';
import findBy from '@/utils/find-by';


// ACTION
const actions = {
  getUserPhotos: ({ commit }, id) => {
    commit('eraseUserPhotos');
    apiPromise(api.GET_USER_PHOTOS(id), commit, 'setUserPhotos');
  },
  getUserProfil: ({ commit }, id) => {
    commit('eraseUserProfile');
    apiPromise(api.GET_USER_PROFILE(id), commit, 'setUserProfile');
  },
};

// MUTATIONS
const mutations = {
  setUserPhotos: (state, photos) => {
    console.log(photos);
    state.userPhotos = photos;
  },
  eraseUserPhotos: (state) => {
    state.userPhotos = [];
  },
  deleteUserPhoto: (state, idPhoto) => {
    console.log(idPhoto);
  },
  setUserProfile: (state, infos) => {
    state.userProfile = infos;
  },
  eraseUserProfile: (state) => {
    state.userProfile = null;
  },
};

// GETTERS
const getters = {
  getUserPhotoById: state => id => findBy(state.userPhotos, id),
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
