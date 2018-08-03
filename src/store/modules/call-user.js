// import axios from 'axios';
import api from '@/api/contests';
import apiPromise from '@/utils/api-promise';

// ACTION
const actions = {
  getUserPhoto: ({ commit }, data) => apiPromise(api.GET_USER_PHOTOS(id), 'setUserPhotos', commit),
};

// MUTATIONS
const mutations = {
  setUserPhotos: (state, contests) => {
    state.userPhotos = contests;
  },
};

// GETTERS
// const getters = {
//   getContest: state => id => findBy(state.all, id),
//   getContestPhoto: state => id => findBy(state.photos, id),
//   getContestPhotoIndex: state => el => state.photos.indexOf(el),
// };

// STATE
const state = {
  userPhotos: [],
};

export default {
  state,
  // getters,
  mutations,
  actions,
};
