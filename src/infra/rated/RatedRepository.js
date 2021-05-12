import defaultRequest from '@/infra/request'

const getRatedMovies = async (limit) => {
 const jsonResponse = await defaultRequest.createRequest('top_rated')
 return jsonResponse.results.slice(0, limit)
}

export default {
  getRatedMovies
}
