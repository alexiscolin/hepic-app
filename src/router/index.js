import Vue from 'vue';
import Router from 'vue-router';
import tilesFlux from '@/components/flux';
import userProfile from '@/components/user';

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
      // path: '/user/:id',
      path: '/user',
      name: 'User',
      component: userProfile,
    },
  ],
});
