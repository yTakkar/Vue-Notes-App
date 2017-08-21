// Installed packages
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

// Project files
import App from './components/App.vue'
import routes from './router/router'
import store from './store/store'

// Filters & Directives
import './f&d/filter'
import './f&d/directive'

// Middlewares
Vue.use(VueResource)
Vue.use(VueRouter)

// Router initialization
const router = new VueRouter({
  routes,
  mode: 'history'
})

// Vue Initialization
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
