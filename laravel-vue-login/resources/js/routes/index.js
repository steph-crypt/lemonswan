import { createRouter, createWebHistory } from 'vue-router'
import Login from '../../views/Login.vue';
import DashBoard from '../../views/DashBoard.vue';

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

export default router


