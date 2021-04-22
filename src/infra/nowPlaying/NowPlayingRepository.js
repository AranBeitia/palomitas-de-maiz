import env from '@/env-variables.js'

const getNowPlaying = async () => {
  const URL = `${env.config.API_TOKEN}/now_playing?api_key=${env.config.API_KEY}&language=es-ES&page=1`
  
  try {
    const response = await fetch(URL)
    if(response.ok) {
      const jsonResponse = await response.json()
      return jsonResponse
    }
  } catch(error) { console.log(error) }
}

export default {
  getNowPlaying
}
