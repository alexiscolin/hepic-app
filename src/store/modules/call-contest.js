// import axios from 'axios';
import api from '@/api/contests';
import findBy from '@/utils/find-by';
import apiPromise from '@/utils/api-promise';

// ACTION
const actions = {
  getContests: ({ commit }, data) => apiPromise(api.GET_CONTESTS(data), 'setContests', commit),
  getContest: ({ commit }, id) => apiPromise(api.GET_CONTEST(id), 'setContest', commit),
  getPhotos: ({ commit }, id) => apiPromise(api.GET_CONTEST_PHOTOS(id), 'setContestPhotos', commit),
  getContestRules: ({ commit }, id) => apiPromise(api.GET_CONTEST_RULES(id), 'setContestRules', commit),
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
  setContestPhotos: (state, photos) => {
    state.photos = photos;
  },
  eraseContestPhotos: (state) => {
    // effacer selection de photo en vote
    state.photos = [];
  },
  setContestRules: (state, rules) => {
    state.rules = rules;
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
  contest: {
    brandName: '',
    logo: '',
    desc: '',
    ban: '',
  },
  photos: [],
  rules: '',
};

export default {
  state,
  getters,
  mutations,
  actions,
};
