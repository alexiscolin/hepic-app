// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import HelloJs from 'hellojs/dist/hello.all.min';
import VueHello from 'vue-hellojs';
import VueColcade from 'vue-colcade';
// import VueColcade from '@/plugins/vue-colcade';
import '@/plugins/axios';
import axios from 'axios';
import App from './App';
import router from './router';
import store from './store';

import './registerServiceWorker';
import './assets/style/style.less';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

HelloJs.init({
  facebook: 699411133760678,
}, {
  redirect_uri: 'authcallback/',
});
Vue.use(VueHello, HelloJs);
Vue.use(VueColcade);

// rec auth token pour axios
const token = localStorage.getItem('user-token');
if (token) axios.defaults.headers.common.Authorization = `Token ${token}`;
