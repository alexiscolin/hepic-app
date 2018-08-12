// import axios from 'axios';
import api from '@/api/photo';
import apiPromise from '@/utils/api-promise';

// ACTION
const actions = {
  getPhoto: ({ commit }, id) => {
    commit('erasePhoto');
    return apiPromise(api.GET_PHOTO(id), commit, 'setPhoto');
  },
  deletePhoto: ({ commit }, id) => {
    // console.log('la');
    // console.log(id);
    commit('deletePhoto', id);
    // return apiPromise(api.DELETE_PHOTO(id), 'deletePhoto', commit);
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
  deletePhoto: (state, photo) => {
    console.log('suppr');
    console.log(photo);
    state.photo = [];
  },
};

// STATE
const state = {
  photo: {},
};

export default {
  state,
  mutations,
  actions,
};
