import SearchRepository from '@/infra/search/SearchRepository'

const initialState = {
  searchMovie: []
}

const actions = {
  async getSearchMovie ({ commit }, query) {
    const searchMovie = await SearchRepository.getSearchMovie(query)
    commit('setSearchMovie', searchMovie)
  }
}

const mutations = {
  setSearchMovie(state, searchMovie) {
    state.searchMovie = searchMovie
  }
}

export default {
  namespaced: true,
  state: initialState,
  actions,
  mutations
}
