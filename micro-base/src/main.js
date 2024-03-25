import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from './store'
// import { registerMicroApps } from 'qiankun';
import { registerMicroApps } from './micro-fe';
registerMicroApps([
  {
    name: 'vue2-app', // app name registered
    entry: '//localhost:3004',
    container: '#sub-app',
    activeRule: '/vue2-app',
  },
  {
    name: 'react-app', // app name registered
    entry: '//localhost:3001',
    container: '#sub-app',
    activeRule: '/react-app',
  },
  {
    name: 'umi-app', // app name registered
    entry: '//localhost:3003',
    container: '#sub-app',
    activeRule: '/umi-app',
  },
  {
    name: 'vue-app', // app name registered
    entry: '//localhost:3002',
    container: '#sub-app',
    activeRule: '/vue-app',
  },
],{
  beforeLoad: [async app => console.log('before load', app.name)],
  beforeMount: [async app => console.log('before mount', app.name)],
  afterMount: [async app => console.log('after mount', app.name)],
});
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
