// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import libFlexible from 'lib-flexible'
import infiniteScroll from 'vue-infinite-scroll'
import '../static/awesome/css/font-awesome.min.css'
import './assets/scss/conmon.scss'

Vue.config.productionTip = false;
Vue.prototype.$http=axios;
Vue.use(VueAxios,axios);
Vue.use(libFlexible);
Vue.use(VueLazyLoad,{
  preload:2,
    error:'@/static/images/error.png',
    loading: '@/static/images/loading.gif',
    attempt:2
});
Vue.use(infiniteScroll);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
    store,
  template: '<App/>',
  components: { App }
});
