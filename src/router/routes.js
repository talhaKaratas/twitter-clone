import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from '../views/Home'

export const router = new VueRouter({
    routes: [
        {path: '/', component: Home},
    ],
    mode: "history",
})