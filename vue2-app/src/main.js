import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './router';
import store from './store';

Vue.config.productionTip = false;

let router = null;

router = new VueRouter({
  base: '/',
  mode: 'history',
  routes,
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');