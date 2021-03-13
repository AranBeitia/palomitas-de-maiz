import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faBuilding } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHome, faBuilding)

Vue.component('font-awesome-icon', FontAwesomeIcon)
