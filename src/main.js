import Vue from 'vue';
import models from './models/index';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  models,
  render: h => h(App),
}).$mount('#app');
