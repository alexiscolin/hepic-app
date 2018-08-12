import api from '@/api/vote';
import apiPromise from '@/utils/api-promise';

// ACTION
const actions = {
  postVote: ({ commit }, id) => {
    console.log(id);
    return apiPromise(api.POST_PHOTO_VOTE(id), 'setContestPhotos', commit);
  },
  postReport: data => apiPromise(api.POST_PHOTO_REPORT(data)),
};

// MUTATIONS
const mutations = {

};

// STATE
const state = {
  send: '',
};

export default {
  state,
  mutations,
  actions,
};
