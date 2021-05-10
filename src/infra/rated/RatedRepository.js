import defaultRequest from '@/infra/request'

const getRatedMovies = async () => {
 const jsonResponse = await defaultRequest.createRequest('top_rated')
 return jsonResponse.results
}

export default {
  getRatedMovies
}
