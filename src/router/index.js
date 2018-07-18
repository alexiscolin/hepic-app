import Vue from 'vue';
import Router from 'vue-router';
import tilesFlux from '@/components/flux';
import userProfile from '@/components/user';
import displayImage from '@/components/image';
import brandContest from '@/components/contest';

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
  ],
});
