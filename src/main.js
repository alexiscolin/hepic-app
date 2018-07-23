// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import './plugins/axios';
import App from './App';
import router from './router';
import store from './store';
import './registerServiceWorker';

// import './assets/style/style.less';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
