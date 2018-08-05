<template>
  <div id="app">
    <sprite-svg/>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios';
import spriteSvg from './components/layout/svg';

export default {
  name: 'App',
  components: {
    spriteSvg,
  },
  created: function $created() {
    // Connexion au reload
    axios.defaults.headers.common.Authorization = this.$store.getters.authToken ? `Token ${this.$store.getters.authToken}` : null;

    // Recup revocation de token
    axios.interceptors.response.use(undefined, err => new Promise(function $handlingAuth() {
      if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
        this.$store.dispatch('logout');
      }
      throw err;
    }));
  },
};
</script>
