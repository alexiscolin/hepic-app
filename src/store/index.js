import Vue from 'vue';
import Vuex from 'vuex';
import connexion from './modules/connexion';
import layerOptin from './modules/validation-action';
import callSignal from './modules/call-signal';
import contestEntry from './modules/contest-entry';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    connexion,
    layerOptin,
    callSignal,
    contestEntry,
  },
});
