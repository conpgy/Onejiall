import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store'
import Home from './components/home.vue'
import LiveList from './components/liveList.vue'
import Live from './components/live.vue'
import Blog from './components/blog.vue'
import About from './components/about.vue'
import Login from './components/login.vue'

Vue.use(Vuex)
Vue.use(VueRouter)

Vue.filter('time', timestamp => {
  return new Date(timestamp).toLocaleTimeString()
})

const routes = [
  {path: '/', component: Home},
  {path: '/blog', component: Blog},
  {path: '/liveList', component: LiveList},
  {path: '/about', component: About},
  {path: '/login', component: Login},
  {path: '/live', component: Live}
]

const router = new VueRouter({routes})

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
