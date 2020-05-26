import Vue from 'vue';
import 'es6-promise/auto';
import Vuex from 'vuex';
import userList from './userList';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    userList
  }
});
