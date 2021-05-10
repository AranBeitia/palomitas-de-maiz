import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faFilm, faPlay, faStar, faSearch, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHome, faFilm, faPlay, faStar, faSearch, faChevronLeft)

Vue.component('font-awesome-icon', FontAwesomeIcon)
