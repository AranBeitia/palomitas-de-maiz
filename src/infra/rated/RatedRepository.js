import defaultRequest from '@/infra/request'

const getRatedMovies = async () => {
 const jsonResponse = await defaultRequest.createRequest('top_rated')
 return jsonResponse.results.slice(0, 5)
}

export default {
  getRatedMovies
}
