import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../views/About.vue'
import Game from '../views/Game.vue'
import Main from '@/views/Main'
import Records from '../views/Records.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/game',
        name: 'Game',
        component: Game
    },
    {
        path: '/records',
        name: 'Records',
        component: Records
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;