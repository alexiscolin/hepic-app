import Vue from 'vue';
import Router from 'vue-router';
import tilesFlux from '@/components/flux';
import userProfile from '@/components/user';
import displayImage from '@/components/image';
import brandContest from '@/components/contest';
import brandContestUpload from '@/components/contest/upload';
// import store from '../store';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Flux',
      component: tilesFlux,
    },
    {
      path: '/user',
      name: 'User',
      component: userProfile,
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
      path: '/contest/upload',
      name: 'Upload',
      component: brandContestUpload,
      beforeEnter: (to, from, next) => {
        // const rules = store.state.contestEntry.contest.agreement === true ? true : '/';
        // next(rules);
        next(true);
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 };
  },
});
