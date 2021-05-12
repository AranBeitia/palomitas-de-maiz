import SearchRepository from '@/infra/search/SearchRepository'

const initialState = {
  searchMovie: []
}

const actions = {
  async getSearchMovie ({ commit }) {
    const searchMovie = await SearchRepository.getSearchMovie()
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
