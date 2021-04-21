const getRatedMovies = async () => {
  const API_URL = 'https://api.themoviedb.org/3/movie'
  const API_KEY = 'c6163ef75c8e34a1d6c622ff9958833e'
  const URL = `${API_URL}/top_rated?api_key=${API_KEY}&language=es-ES&page=1`

  try {
    const response = await fetch(URL)
    if(response.ok) {
      const jsonResponse = await response.json()
      return jsonResponse
    }
  } catch (error) { console.log(error) }
}

export default {
  getRatedMovies
}
