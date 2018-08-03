import Vue from 'vue';
import Vuex from 'vuex';
import connexion from './modules/connexion';
import popin from './modules/popin';
import layerOptin from './modules/layer-optin';
import callPhoto from './modules/call-photo';
import callcontest from './modules/call-contest';
import contestEntry from './modules/contest-entry';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    connexion,
    popin,
    layerOptin,
    callPhoto,
    callcontest,
    contestEntry,
  },
});
