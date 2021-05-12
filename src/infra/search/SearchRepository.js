import defaultRequest from '@/infra/request'

const getSearchMovie = async (query) => {
  const jsonResponse = await defaultRequest.createSearchRequest(query)
  return jsonResponse.results
}

export default {
  getSearchMovie
}
