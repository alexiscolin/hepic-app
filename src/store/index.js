import Vue from 'vue';
import Vuex from 'vuex';
import contestEntry from './modules/contest-entry';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    contestEntry,
  },
});
