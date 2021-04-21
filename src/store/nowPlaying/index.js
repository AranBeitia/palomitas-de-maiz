import NowPlayingRepository from '@/infra/nowPlaying/NowPlayingRepository'

const initialState = {
  nowPlaying: []
}

const actions = {
  async getNowPlaying ({ commit }) {
    const nowPlaying = await NowPlayingRepository.getNowPlaying()
    commit('setNowPlaying', nowPlaying)
  }
}

const mutations = {
  setNowPlaying(state, nowPlaying) {
    state.nowPlaying = nowPlaying
  }
}

export default {
  namespaced: true,
  state: initialState,
  actions,
  mutations
}