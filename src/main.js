import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';


Vue.config.productionTip = false;

//路由的引入
import router from './plugins/router.config.js';

//配置全局的baseurl
import config from './config/config.js';
window.baseUrl = config.baseUrl;

//axios的引入
import './plugins/axios.config.js';


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
