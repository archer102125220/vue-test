import Vue from 'vue';
import models from './models/index';
import App from './App.vue';
import router from './router';
import GlobalLayout from "./layouts/GlobalLayout";

Vue.component("GlobalLayout", GlobalLayout);
Vue.config.productionTip = false;

new Vue({
  router,
  store: models,
  render: h => h(App),
}).$mount('#app');
