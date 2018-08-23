import api from '@/api/contests';
import findBy from '@/utils/find-by';
import apiPromise from '@/utils/api-promise';

// ACTION
const actions = {
  getContests: ({ commit }, data) => apiPromise(api.GET_CONTESTS(data), commit, 'setContests'),
  getContest: ({ commit }, id) => apiPromise(api.GET_CONTEST(id), commit, 'setContest'),
  getPhotos: ({ commit }, id) => apiPromise(api.GET_CONTEST_PHOTOS(id), commit, 'setContestPhotos'),
  getContestRules: ({ commit }, id) => apiPromise(api.GET_CONTEST_RULES(id), commit, 'setContestRules'),
  postContestPhoto: ({ commit }, data) => apiPromise(api.POST_CONTEST_PHOTO(data), commit, 'eraseAgreement'),
  searchContests: ({ getters }, data) => getters.searchContests(data),
};

// MUTATIONS
const mutations = {
  setContests: (state, contests) => {
    state.all = contests;
    var img = new Image(1,1); // width, height values are optional params
    img.src = 'https://cdn.hepic.fr/ban/ba181941-54d5-4deb-aa56-1a923416a75c.jpeg';

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
    state.photos = [];
  },
  setContestRules: (state, rules) => {
    state.rules = rules;
  },
};

// GETTERS
const getters = {
  getContestById: state => id => findBy(state.all, id),
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
