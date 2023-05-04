// import { createApp } from 'vue';
// import Login from '../views/Login.vue';
//
// const app = createApp({
//
// });
//
// app.component('login', Login);
// app.mount("#app");

import { createApp } from 'vue'
import App from '../App.vue'
import router from './routes/index'
import '../css/app.css'


createApp(App).use(router).mount('#app')












