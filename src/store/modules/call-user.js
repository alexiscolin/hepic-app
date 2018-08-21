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
  getConfigCGU: ({ commit }) => {
    commit('eraseConfigContent');
    apiPromise(api.GET_USER_CGU(), commit, 'setConfigContent');
  },
  getNotification: ({ commit }) => apiPromise(api.GET_USER_NOTIFICATION(), commit, 'setUserNotification'),
  postNotification: ({ commit }, data) => apiPromise(api.GET_USER_NOTIFICATION(data), commit),
  postContactMessage: ({ commit }, data) => apiPromise(api.POST_CONTACT_MESSAGE(data), commit, 'setUserProfile'),
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
    state.userProfile = null;
  },
  setConfigContent: (state, content) => {
    state.configContent = content;
  },
  eraseConfigContent: (state) => {
    state.configContent = '';
  },
  setUserNotification: (state, notif) => {
    state.userNotification = notif;
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
  configContent: '',
  userNotification: '',
};

export default {
  state,
  getters,
  mutations,
  actions,
};
