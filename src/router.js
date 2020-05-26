import Vue from 'vue';
import VueRouter from 'vue-router';
import indexPage from './routes/indexPage';
import { ValidationProvider } from 'vee-validate';
Vue.use(VueRouter, ValidationProvider);

const routes = [{
    path: '/',
    name: 'home',
    meta: {
        layout: 'default'
    },
    component: indexPage
}, { path: '*', redirect: '/' }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;