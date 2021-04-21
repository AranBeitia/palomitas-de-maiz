import Vue from 'vue'
import Vuex from 'vuex'

import PopularStore from './popular'
import RatedStore from './rated'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    popular: PopularStore,
    rated: RatedStore
  }
})
