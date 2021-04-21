import RatedRepository from '@/infra/rated/RatedRepository.js'

const initialState = {
  ratedMovies: []
}

const actions = {
  async getRatedMovies ({ commit }) {
    const rated = await RatedRepository.getRatedMovies()
    commit('setRatedMovies', rated)
  }
}

const mutations = {
  setRatedMovies(state, rated) {
    state.ratedMovies = rated
  }
}

export default {
  namespaced: true,
  state: initialState,
  actions, 
  mutations
}