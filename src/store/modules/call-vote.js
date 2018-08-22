import api from '@/api/vote';
import apiPromise from '@/utils/api-promise';

// ACTION
const actions = {
  postVote: ({ commit }, id) => {
    const data = {
      photo: id,
    };
    return apiPromise(api.POST_PHOTO_VOTE(data), commit);
  },
  postReport: ({ commit }, data) => apiPromise(api.POST_PHOTO_REPORT(data), commit),
};

// STATE
const state = {
  send: true,
};

export default {
  state,
  actions,
};
