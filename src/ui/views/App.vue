<template>
  <div id="app">
    <TheTopNav id="nav"/>
    <router-view />
    <span>{{ result }}</span>
  </div>
</template>

<script>
import TheTopNav from '@/ui/views/nav/TheTopNav.vue'
// import axios from 'axios'

// const URL_PATH = 'https://api.themoviedb.org'
// const API_KEY = 'c6163ef75c8e34a1d6c622ff9958833e'
export default {
  name: 'App',
  components: {
    TheTopNav
  },
  data () {
    return { result:null }
  },
  created() {
    // axios.get(`${URL_PATH}/3/movie/1?api_key=${API_KEY}&language=es-ES`)
    // .then((result) => {
    //   this.result = result.data;
    // })
  }

//   const getMovies = (type) => {
//   const url = `${URL_PATH}/3/movie/${type}?api_key=${API_KEY}&language=es-ES&page=1`
//   return fetch(url)
//     .then(response => response.json())
//     .then(result => result.results)
//     .catch(error => console.log(error))
// }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  a{
    font-weight: bold;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
