<template>
  <div>
    <b-list-group v-for="(movie, index) in movies" :key="index">
      <b-list-group-item :to="{ name: 'Movie' }">{{ movie.original_title }}</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
/* import Request from '@/ui/views/home/homeRequest.js' */
import { mapState, mapActions } from 'vuex'
export default {
  props: {
    movies: {
      type: Object,
      required: true
    }
  },
/*   data () {
    return {
      moviess: []
    }
  }, */
  computed: {
    ...mapState('Popular', ['moviesss'])
  },
  created () {
    this.getMovies()
  },
  methods: {
    ...mapActions('Popular',['getMovies'])
/*     getMovies () {
      Request.getMovies().then(moviess => this.moviess = moviess)
    } */
  }
}
</script>
