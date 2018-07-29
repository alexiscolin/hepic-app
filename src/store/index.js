import Vue from 'vue';
import Vuex from 'vuex';
import connexion from './modules/connexion';
import contestEntry from './modules/contest-entry';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    connexion,
    contestEntry,
  },
});
