import Vue from 'vue'
import Vuex from 'vuex'

import PopularStore from './popular'
import RatedStore from './rated'
import NowPlayingStore from './nowPlaying'
import movieStore from './movie'
import searchMovie from './search'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    popular: PopularStore,
    rated: RatedStore,
    nowPlaying: NowPlayingStore,
    movie: movieStore,
    search: searchMovie
  }
})
