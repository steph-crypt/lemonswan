import { createRouter, createWebHistory } from 'vue-router'
import Login from '../../views/Login.vue';
import DashBoard from '../../views/DashBoard.vue';
//import * as store from "../../store/Auth";
//import Vue from "vue";
//import store from "@/store/index";
// import VueRouter from "vue-router";
// Vue.use(VueRouter);


const routes = [
    {
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/dash-board',
        name: 'dash-board',
        meta: { requiresAuth: true },
        component: DashBoard
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})


// router.beforeEach((to, from, next) => {
//     const authUser = store.getters["auth/authUser"];
//     const reqAuth = to.matched.some((record) => record.meta.requiresAuth);
//     const loginQuery = { path: "/login", query: { redirect: to.fullPath } };
//
//     if (reqAuth && !authUser) {
//         store.dispatch("auth/getAuthUser").then(() => {
//             if (!store.getters["auth/authUser"]) next(loginQuery);
//             else next();
//         });
//     } else {
//         next(); // make sure to always call next()!
//     }
//     next();
// });



export default router


