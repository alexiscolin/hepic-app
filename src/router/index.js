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
      beforeEnter: ifNotAuthenticated,
    },
    {
      path: '/flux',
      name: 'Flux',
      component: tilesFlux,
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/user/:user',
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
      path: '/user/:user/picture/:id',
      name: 'Image',
      component: displayImage,
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/contest/:id',
      name: 'Contest',
      component: brandContest,
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/contest/:id/vote/', // sans idPhoto
      name: 'Vote',
      component: brandContestVote,
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/contest/:id/vote/:photo',
      name: 'VoteId',
      component: brandContestVote,
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
router.beforeEach((to, from, next) => {
  store.commit('popinHide');

  // effacer mention agreement si signé et sortie de page
  // if ((from.name === 'Contest' || from.name === 'Upload') && to.name !== 'Upload') {
  //   store.commit('eraseAgreement');
  // }
  next();
});

export default router;
