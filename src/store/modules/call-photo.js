import route from '@/router';
import api from '@/api/photo';
import apiPromise from '@/utils/api-promise';


// ACTION
const actions = {
  getPhoto: ({ commit }, id) => {
    commit('erasePhoto');
    return apiPromise(api.GET_PHOTO(id), commit, 'setPhoto');
  },
  deletePhoto: ({ commit }, { id }) => apiPromise(api.DELETE_PHOTO(id), commit, 'deletePhoto'),
};

// MUTATIONS
const mutations = {
  setPhoto: (state, photo) => {
    state.photo = photo;
  },
  erasePhoto: (state) => {
    state.photo = [];
  },
  deletePhoto: (state) => {
    state.photo = [];
    route.go(-1);
  },
};

// GETTERS
const getters = {
  getUserPhotoByIdd: () => 2,
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
