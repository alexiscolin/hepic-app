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
  postContestPhoto: ({ commit }, data) => apiPromise(api.POST_CONTEST_PHOTO(data), 'eraseAgreement', commit),
  searchContests: ({ getters }, data) => getters.searchContests(data),
};

// MUTATIONS
const mutations = {
  setContests: (state, contests) => {
    state.all = contests;
    state.contests = contests;
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
  getContestById: state => id => findBy(state.all, id),
  getContest: state => state.contest,
  getContestPhotoById: state => id => findBy(state.photos, id),
  getContestPhotoIndex: state => el => state.photos.indexOf(el),
  searchContests: state => (data) => {
    const lowerData = data.toLowerCase();
    return state.all.filter(item => item.brandName.toLowerCase().indexOf(lowerData) !== -1);
  },
};

// STATE
const state = {
  all: [],
  contests: [],
  contest: null,
  photos: [],
  rules: '',
};

export default {
  state,
  getters,
  mutations,
  actions,
};
