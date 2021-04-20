import Vue from 'vue'
import Vuex from 'vuex'

import PopularStore from './popular'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    Popular: PopularStore
  }
})
