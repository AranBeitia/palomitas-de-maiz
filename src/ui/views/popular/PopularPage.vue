<template>
  <b-container>
    <h1 class="text-center mb-5">Populares</h1>
    <article class="grid-5-to-3">
      <section
        v-for="(movie, index) in movies"
        :key="index"
      >
        <router-link :to="`/movie/${movie.id}`">
          <b-card
            overlay
            :img-src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`"
            :img-alt="movie.title"
            text-variant="white"
          >
          </b-card>
          <b-card-text>
            <h1>{{ movie.title }}</h1>
            <span>{{ movie.release_date }}</span>
          </b-card-text>
        </router-link>
      </section>
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
    this.getPopularMovies(8)
  },
  methods: {
    ...mapActions('popular', ['getPopularMovies'])
  }
}
</script>

<style lang="scss" scoped>
  @include is-tablet {
    h1 {
      font-size: 18px;
      font-weight: bold;
    }

    h2 {
      font-size: 18px;
    }

    p {
      font-size: 12px;
      margin-bottom: 0;
    }
  }
</style>
