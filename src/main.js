import Vue from 'vue'

// BootstrapVue
import './plugins/bootstrapVue'

// Vue Font-Awesome
import './plugins/fontAwesome'

// CSS global
import './assets/css/main.styl'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  methods: {
    // Nuestra función
    init () {
      store.dispatch('oauth/getToken', null, { root: true })
    }
  },
  // Hook created
  created () {
    this.init()
  },
  render: h => h(App)
}).$mount('#app')
