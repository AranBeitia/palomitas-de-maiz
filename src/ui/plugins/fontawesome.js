import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faBuilding, faPlay, faStar, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHome, faBuilding, faPlay, faStar, faChevronLeft)

Vue.component('font-awesome-icon', FontAwesomeIcon)
