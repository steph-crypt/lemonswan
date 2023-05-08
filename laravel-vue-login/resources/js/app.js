import { createApp } from 'vue'
import App from '../App.vue'
import router from './routes/index'
import '../css/app.css'


createApp(App).use(router).mount('#app')

// import { createStore } from 'vuex'

// const store = createStore({
//     state () {
//         return {
//             user: { name: 'John Doe', email: 'fake@email.com', username: 'jd123'}
//         }
//     }
// })

// require('./bootstrap');
// window.Vue = require('vue');

// import store from '../store/index'
//
// Vue.component('posts', require('./components/Posts.vue'))
// Vue.component('createPost', require('./components/CreatePost.vue'))
//
// const app = new Vue({
//     el: '#app',
//     store
// });













