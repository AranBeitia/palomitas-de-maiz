import PopularMoviesRepository from '@/infra/movies/PopularMoviesRepository'

const initialState = {
  movies: []
}

const actions = {
  async getMovies ({ commit }) {
    const movies = await PopularMoviesRepository.getMovies()
    commit('setMovies', movies)
  }
}

const mutations = {
  setMoviesss(state, movies) {
    state.movies = movies
  }
}

export default {
  namespaced: true,
  state: initialState,
  actions,
  mutations
}
