import defaultRequest from '@/infra/request'

const getPopularMovies = async (limit) => {
  const jsonResponse = await defaultRequest.createRequest('popular')
  return jsonResponse.results.slice(0, limit)
}

export default {
  getPopularMovies
}
