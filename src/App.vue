<template>
  <div id="app">
    <sprite-svg/>
    <!-- <app-header v-if="$route.path !== '/'"/> -->
    <router-view/>
    <!-- <app-footer v-if="$route.path !== '/'"/> -->
  </div>
</template>

<script>
import axios from 'axios';
import spriteSvg from './components/layout/svg';
import appHeader from './components/layout/header';
import appFooter from './components/layout/footer';

export default {
  name: 'App',
  components: {
    spriteSvg,
    appHeader,
    appFooter,
  },
  created: function $created() {
    axios.interceptors.response.use(undefined, err => new Promise(function $handlingAuth() {
      if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
        this.$store.dispatch('logout');
      }
      throw err;
    }));
  },
};
</script>
