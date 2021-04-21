<template>
  <div>
<!--     <pre>{{ movies.results }}</pre> -->
    <b-list-group
      v-for="(movie, index) in movies.results"
      :key="index"
    >
      <PopularMovie
        :title="movie.title"
        :image="movie.poster_path"
      />
    </b-list-group>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import PopularMovie from '@/ui/views/popular/PopularMovie'

export default {
  components: {
    PopularMovie
  },
  computed: {
    ...mapState('popular', ['movies'])
  },
  created () {
    this.getPopularMovies()
  },
  methods: {
    ...mapActions('popular',['getPopularMovies'])
  }
}
</script>
