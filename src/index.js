import Vue from 'vue';
import 'es6-promise/auto';
import Vuex from 'vuex';
import App from './App';
import router from './router';
import GlobalLayout from './layouts/GlobalLayout';

const plugins = [
  require('./models/userList').default,
  require('./models/postData').default
];

Vue.component('GlobalLayout', GlobalLayout);


Vue.use(Vuex);
Vue.config.performance = process.env.NODE_ENV === 'development';
Vue.config.devtools = process.env.NODE_ENV === 'development';
Vue.config.silent = process.env.NODE_ENV === 'development';
Vue.config.productionTip = process.env.NODE_ENV === 'production';

let modules = {};
plugins.map(element => modules[element.namespace] = {
  ...element
});

new Vue({
  el: '#app',
  router,
  store: new Vuex.Store({
    modules
  }),
  render: h => h(App),
});

/*new Vue({
  router,
  store: models,
  render: h => h(App),
}).$mount('#app');*/
