import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/home.vue'
import Live from './components/live.vue'
import Blog from './components/blog.vue'
import About from './components/about.vue'
import Login from './components/login.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Home},
  {path: '/blog', component: Blog},
  {path: '/live', component: Live},
  {path: '/about', component: About},
  {path: '/login', component: Login}
]

const router = new VueRouter({routes})

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
