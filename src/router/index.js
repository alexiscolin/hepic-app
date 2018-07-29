import Vue from 'vue';
import Router from 'vue-router';
import indexHp from '@/components/index';
import tilesFlux from '@/components/flux';
import userProfile from '@/components/user';
import userSettings from '@/components/user/settings';
import displayImage from '@/components/image';
import brandContest from '@/components/contest';
import brandContestVote from '@/components/vote';
import brandContestUpload from '@/components/contest/upload';
import store from '../store';

Vue.use(Router);

// règles d'autorisation à la connexion
const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next();
    return;
  }
  next('/flux');
};
const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next();
    return;
  }
  next('/');
};

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: indexHp,
      beforeEnter: ifNotAuthenticated,
    },
    {
      path: '/flux',
      name: 'Flux',
      component: tilesFlux,
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/user',
      name: 'User',
      component: userProfile,
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/user/settings/:type',
      name: 'Settings',
      component: userSettings,
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/image/:id',
      name: 'Image',
      component: displayImage,
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/contest',
      name: 'Contest',
      component: brandContest,
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/contest/vote',
      name: 'Vote',
      component: brandContestVote,
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/contest/upload',
      name: 'Upload',
      component: brandContestUpload,
      beforeEnter: (to, from, next) => {
        const rules = store.state.contestEntry.contest.agreement === true ? true : '/';
        if (store.getters.isAuthenticated && rules) {
          next();
          return;
        }
        next('/');
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || to.hash || { x: 0, y: 0 };
  },
});
