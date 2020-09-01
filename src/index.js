import Vue from 'vue';
import 'es6-promise/auto';
import Vuex from 'vuex';
import VueMaterial from 'vue-material';
import App from './App';
import router from './router';
import GlobalLayout from './layouts/GlobalLayout';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';


const plugins = [
  require('./models/userList').default,
  require('./models/postData').default
];

Vue.component('GlobalLayout', GlobalLayout);

Vue.use(VueMaterial);
Vue.use(Vuex);
Vue.config.performance = process.env.NODE_ENV === 'development';
Vue.config.devtools = process.env.NODE_ENV === 'development';
Vue.config.silent = process.env.NODE_ENV === 'development';
Vue.config.productionTip = process.env.NODE_ENV === 'production';

let modules = {};
plugins.map(element => modules[element.namespace] = {
  ...element
});

//https://medium.com/pierceshih/vue-js-%E5%AD%B8%E7%BF%92%E7%AD%86%E8%A8%98-day14-vue%E7%94%9F%E5%91%BD%E9%80%B1%E6%9C%9F-65bc934dfd47
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
