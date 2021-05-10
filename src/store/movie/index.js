import movieRepository from "@/infra/movie/movieRepository";

const initialState = {
  movieDetail: ''
}

const actions = {
  async getMovieDetail({ commit }, id) {
    const movieDetail = await movieRepository.getMovieDetail(id);
    commit('setMovieDetail', movieDetail);
  }
}

const mutations = {
  setMovieDetail(state, movieDetail) {
    state.movieDetail = movieDetail;
  }
}

export default {
    namespaced: true,
    state: initialState,
    actions,
    mutations
}