// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import Login from './../../views/Login.vue'
// import DashBoard from './../../views/DashBoard.vue'
//
// Vue.use(VueRouter)
//
// const routes = [
//     {
//         path: '/',
//         name: 'login',
//         component: Login
//     },
//     //  Added our new route file named profile.vue
//     {
//         path: '/dash-board',
//         name: 'dash-board',
//         component: DashBoard
//     }
// ]
//
// // Create Vue Router Object
// const router = new VueRouter({
//     mode: 'history',
//     base: process.env.BASE_URL,
//     routes
// })
//
// export default router

import { createRouter, createWebHistory } from 'vue-router'
import Login from '../../views/Login.vue'

const routes = [
    {
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/dash-board',
        name: 'dash-board',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../../views/DashBoard.vue')
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router

