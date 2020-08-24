import Vue from 'vue';
import VueRouter from 'vue-router';
import indexPage from './routes/indexPage';
import pageTwo from './routes/pageTwo';
import { ValidationProvider } from 'vee-validate';
Vue.use(VueRouter, ValidationProvider);

const routes = [{
    path: '/',
    name: 'home',
    meta: {
        layout: 'GlobalLayout'
    },
    component: indexPage
}, {
    path: '/two',
    name: 'two',
    meta: {
        layout: 'GlobalLayout'
    },
    component: pageTwo
},
{ path: '/index', redirect: '/' }
];

const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes
});

export default router;