import vars from '@/env-variables.js'

const createRequest = async (path) => {
  const URL = `${vars.config.API_TOKEN}/movie/${path}?api_key=${vars.config.API_KEY}&language=es-ES&page=1`

  try {
    const response = await fetch(URL)
    if(response.ok) {
      const jsonResponse = await response.json()
      return jsonResponse
    }
  } catch(error) { console.log(error) }
}

const createSearchRequest = async (query) => {
  const URL = `${vars.config.API_TOKEN}/search/movie/?api_key=${vars.config.API_KEY}&language=es-ES&query=${query}&page=1&include_adult=false`

  try {
    const response = await fetch(URL)
    if(response.ok) {
      const jsonResponse = await response.json()
      return jsonResponse
    }
  } catch(error) { console.log(error) }
}

export default {
  createRequest,
  createSearchRequest
}
