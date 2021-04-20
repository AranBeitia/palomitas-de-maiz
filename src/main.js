import Vue from 'vue'
import App from './ui/views/App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './ui/plugins/fontawesome'
import './ui/assets/sass/style.scss'
import router from './router'
import { store } from './store/store'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
