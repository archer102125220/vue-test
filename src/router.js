import Vue from 'vue';
import VueRouter from 'vue-router';
import indexPage from './routes/indexPage';
import PageTwo from './routes/pageTwo';
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
    component: PageTwo
},
{ path: '/index', redirect: '/' }
];

//https://www.itread01.com/article/1532399388.html

const router = new VueRouter({
    mode: 'hash',
    base: '/',
    routes
});

export default router;