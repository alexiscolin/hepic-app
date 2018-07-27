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

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: indexHp,
    },
    {
      path: '/flux',
      name: 'Flux',
      component: tilesFlux,
    },
    {
      path: '/user',
      name: 'User',
      component: userProfile,
    },
    {
      path: '/user/settings/:type',
      name: 'Settings',
      component: userSettings,
    },
    {
      path: '/image/:id',
      name: 'Image',
      component: displayImage,
    },
    {
      path: '/contest',
      name: 'Contest',
      component: brandContest,
    },
    {
      path: '/contest/vote',
      name: 'Vote',
      component: brandContestVote,
    },
    {
      path: '/contest/upload',
      name: 'Upload',
      component: brandContestUpload,
      beforeEnter: (to, from, next) => {
        const rules = store.state.contestEntry.contest.agreement === true ? true : '/';
        next(rules);
        next(true);
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || to.hash || { x: 0, y: 0 };
  },
});
