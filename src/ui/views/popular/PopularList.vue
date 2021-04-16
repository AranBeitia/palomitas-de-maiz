<template>
  <div>
    <button @click="getMovies">get Movies</button>
    <pre>{{moviess}}</pre>

    <b-list-group v-for="(movie, index) in movies" :key="index">
      <b-list-group-item :to="{ name: 'Movie' }">{{ movie.original_title }}</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import Request from '@/ui/views/home/homeRequest.js'

export default {
  props: {
    movies: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      moviess: []
    }
  },
  methods: {
    getMovies () {
      console.log(Request.getMovies().then(moviess => this.moviess = moviess))
      Request.getMovies().then(moviess => this.moviess = moviess)
    }
  }
}
</script>
