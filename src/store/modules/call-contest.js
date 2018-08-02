// import axios from 'axios';
import api from '@/api/contests';
import findBy from '@/utils/find-by';

// ACTION
const actions = {
  getContests: ({ commit }, data) => new Promise((resolve, reject) => {
    api.GET_CONTESTS(data).then((res) => {
      commit('setContests', res.data);
      resolve(res);
    }).catch((res) => {
      reject(res);
    });
  }),
  getContest: ({ commit }, id) => new Promise((resolve, reject) => {
    api.GET_CONTEST(id).then((res) => {
      console.log(res.data);
      commit('setContest', res.data);
      resolve(res);
    }).catch((res) => {
      reject(res);
    });
  }),
  getPhotos: ({ commit }, id) => new Promise((resolve, reject) => {
    api.GET_CONTEST_PHOTOS(id).then((res) => {
      console.log(res.data);
      commit('setPhotos', res.data);
      resolve(res);
    }).catch((res) => {
      reject(res);
    });
  }),
};

// MUTATIONS
const mutations = {
  setContests: (state, contests) => {
    state.all = contests;
  },
  setContest: (state, contest) => {
    state.contest = contest;
  },
  eraseContest: (state) => {
    state.contest = {};
  },
  setPhotos: (state, photos) => {
    state.photos = photos;
  },
};

// GETTERS
const getters = {
  getContest: state => id => findBy(state.all, id),
  getContestPhoto: state => id => findBy(state.photos, id),
  getContestPhotoIndex: state => el => state.photos.indexOf(el),
};

// STATE
const state = {
  all: [],
  contest: {},
  photos: [],
};

export default {
  state,
  getters,
  mutations,
  actions,
};
