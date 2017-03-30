import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router';
import Vuex from 'vuex';
import store from './store';
import resource from 'vue-resource';
import { InfiniteScroll } from 'mint-ui';
import 'mint-ui/lib/style.css';
import MintUI from 'mint-ui'



Vue.use(MintUI);
Vue.use(InfiniteScroll);
Vue.use(router);
Vue.use(VueRouter);
Vue.use(resource);
Vue.use(router);
Vue.use(VueRouter);
Vue.use(resource);
Vue.http.options.emulateJSON = true;




new Vue({
  el: '#app',
  mode:history,
  router,
  store,
  render: h => h(App)
})
