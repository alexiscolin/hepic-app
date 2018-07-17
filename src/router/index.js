import Vue from 'vue';
import Router from 'vue-router';
import tilesFlux from '@/components/flux';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Flux',
      component: tilesFlux,
    },
  ],
});
