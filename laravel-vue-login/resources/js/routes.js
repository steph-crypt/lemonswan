// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import home from './routes/home';
//
// Vue.use(VueRouter);
// export default new VueRouter({
//     mode: 'history',
//     scrollBehavior: (to, from, savedPosition) => ({ y: 0 }),
//     routes: [
//         ...home,
//     ],
// });


// 1. Define route components.
// These can be imported from other files
const Login = { template: '<div>Login</div>' }
const Dashboard = { template: '<div>Dashboard</div>' }

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    { path: '/', component: Login },
    { path: '/dash-board', component: DashBoard },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
})

// 5. Create and mount the root instance.
const app = Vue.createApp({})
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

app.mount('#app')

// Now the app has started!
