import Vue from 'vue';
import Router from 'vue-router';
import indexHp from '@/components/RouteIndex';
import RouteFlux from '@/components/RouteFlux';
import RouteUser from '@/components/RouteUser';
import userSettings from '@/components/RouteUser/UserSettings';
import RoutePhoto from '@/components/RoutePhoto';
import RouteContest from '@/components/RouteContest';
import RouteVote from '@/components/RouteVote';
import brandContestUpload from '@/components/RouteContest/ContestUpload';
import RouteNotFound from '@/components/RouteNotFound';
import RouteCallback from '@/components/RouteCallback';
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

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: indexHp,
      beforeEnter: ifNotAuthenticated,
    },
    {
      path: '/authcallback',
      name: 'AuthCallback',
      component: RouteCallback,
    },
    {
      path: '/flux',
      name: 'Flux',
      component: RouteFlux,
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/user/:user',
      name: 'User',
      component: RouteUser,
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/user/settings/:type',
      name: 'Settings',
      component: userSettings,
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/photo/:id',
      name: 'Image',
      component: RoutePhoto,
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/contest/:id',
      name: 'Contest',
      component: RouteContest,
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/contest/:id/vote/', // sans idPhoto
      name: 'Vote',
      component: RouteVote,
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/contest/:id/vote/:photo',
      name: 'VoteId',
      component: RouteVote,
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/contest/:id/upload',
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
    {
      path: '*', // 404
      component: RouteNotFound,
      beforeEnter: ifAuthenticated,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || to.hash || { x: 0, y: 0 };
  },
});

// effacer popin du store en cas de changement de page
// récup notification au chargement auth
router.beforeEach((to, from, next) => {
  store.commit('popinHide');
  next();
});
router.afterEach((to, from) => {
  if (to.name !== 'Index') from.name ? store.dispatch('getNotification') : setTimeout(() => store.dispatch('getNotification'), 1000);
});

export default router;
