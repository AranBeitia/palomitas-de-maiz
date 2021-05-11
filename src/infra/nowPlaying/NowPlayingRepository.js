import defaultRequest from '@/infra/request'

const getNowPlaying = async () => {
  const jsonResponse = await defaultRequest.createRequest('now_playing')
  return jsonResponse.results
}

export default {
  getNowPlaying
}
