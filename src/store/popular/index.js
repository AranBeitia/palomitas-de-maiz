import PopularRepository from '@/infra/popular/PopularRepository'

const initialState = {
  movies: []
}

const actions = {
  async getPopularMovies ({ commit }, limit) {
    const movies = await PopularRepository.getPopularMovies(limit)
    commit('setMovies', movies)
  }
}

const mutations = {
  setMovies(state, movies) {
    state.movies = movies
  }
}

export default {
  namespaced: true,
  state: initialState,
  actions,
  mutations
}
