import api from '@/api/vote';
import apiPromise from '@/utils/api-promise';

// ACTION
const actions = {
  postVote: ({ commit }, id) => {
    console.log(id);
    return apiPromise(api.POST_PHOTO_VOTE(id), 'setContestPhotos', commit);
  },
  postSignal: ({ state }, data) => {
    console.log(data.id);
    state.send = true; // utile le send ?
  },
  deletePhoto: ({ state }, data) => {
    console.log(data.id);
    state.send = true; // utile le send ?
  },
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
