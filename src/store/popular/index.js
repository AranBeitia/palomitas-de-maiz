import PopularMoviesRepository from '@/infra/movies/PopularMoviesRepository'

const initialState = {
  moviesss: []
}

const actions = {
  async getMovies ({ commit }) {
    const moviesss = await PopularMoviesRepository.getMovies()
    commit('setMoviesss', moviesss)
  }
}

const mutations = {
  setMoviesss(state, moviesss) {
    state.moviesss = moviesss
  }
}

export default {
  namespaced: true,
  state: initialState,
  actions,
  mutations
}
