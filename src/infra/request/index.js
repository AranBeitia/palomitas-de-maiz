import vars from '@/env-variables.js'

const createRequest = async (path) => {
  const URL = `${vars.config.API_TOKEN}/${path}?api_key=${vars.config.API_KEY}&language=es-ES&page=1`

  try {
    const response = await fetch(URL)
    if(response.ok) {
      const jsonResponse = await response.json()
      return jsonResponse
    }
  } catch(error) { console.log(error) }
}

export default {
  createRequest
}

