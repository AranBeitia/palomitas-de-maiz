import defaultRequest from '@/infra/request'

const getPopularMovies = async () => {
  const jsonResponse = await defaultRequest.createRequest('popular')
  return jsonResponse.results.slice(0,5)
}

export default {
  getPopularMovies
}
