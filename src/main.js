import Vue from 'vue'
import App from './ui/views/App.vue'
import { BootstrapVue, IconsPlugin, CarouselPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './ui/plugins/fontawesome'
import './ui/assets/sass/style.scss'
import router from './router'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(CarouselPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
