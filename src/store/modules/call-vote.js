import api from '@/api/vote';
import apiPromise from '@/utils/api-promise';

// ACTION
const actions = {
  postVote: ({ commit }, id) => {
    console.log(id);
    return apiPromise(api.POST_PHOTO_VOTE(id), commit, 'setContestPhotos');
  },
  postReport: ({ commit }, data) => apiPromise(api.POST_PHOTO_REPORT(data), commit),
};

// MUTATIONS
const mutations = {

};

// STATE
const state = {
  send: true,
};

export default {
  state,
  mutations,
  actions,
};
