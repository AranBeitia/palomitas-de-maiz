import defaultRequest from '@/infra/request'

const getSearchMovie = async () => {
  console.log('buscando peli...')
  const jsonResponse = await defaultRequest.createRequest('')
  return jsonResponse
}

export default {
  getSearchMovie
}