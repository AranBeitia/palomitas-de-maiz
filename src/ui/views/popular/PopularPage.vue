<template>
  <b-container>
    <h1 class="text-center mb-5">Populares</h1>
    <article class="grid-5-to-3">
      <router-link
        v-for="(movie, index) in movies"
        :key="index"
        :to="`/movie/${movie.id}`"
      >
        <b-card
          overlay
          :img-src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`"
          :img-alt="movie.title"
          text-variant="white"
        >
        </b-card>
        <b-card-text class="list-text">
          <h2>{{ movie.title }}</h2>
          <span>{{ movie.release_date }}</span>
        </b-card-text>
      </router-link>
    </article>
    <Pagination />
  </b-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Pagination from '@/ui/components/Pagination'

export default {
  components: {
    Pagination
  },
  computed: {
    ...mapState('popular', ['movies'])
  },
  created () {
    this.getPopularMovies()
  },
  methods: {
    ...mapActions('popular', ['getPopularMovies'])
  }
}
</script>

<style lang="scss" scoped>
.list-text {
  color: var(--white);
}
</style>
