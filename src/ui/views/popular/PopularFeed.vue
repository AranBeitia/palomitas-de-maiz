<template>
  <article class="py-5">
    <h2 class="popular__header">Popular</h2>
    <section class="grid-5-to-3">
      <div
        v-for="(movie, index) in movies"
        :key="index"
      >
        <router-link :to="`/movie/${movie.id}`">
          <PopularMovie
            :image="movie.poster_path"
          />
        </router-link>
      </div>
    </section>
  </article>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import PopularMovie from '@/ui/views/popular/PopularMovie'

export default {
  components: {
    PopularMovie
  },
  props: {
    limit: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapState('popular', ['movies'])
  },
  created () {
    this.getPopularMovies(this.limit)
  },
  methods: {
    ...mapActions('popular',['getPopularMovies'])
  }
}
</script>
