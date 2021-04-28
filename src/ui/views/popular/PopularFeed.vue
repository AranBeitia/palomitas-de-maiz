<template>
  <article>
    <h2 class="popular__header">Popular</h2>
    <div class="grid">
      <b-list-group
        v-for="(movie, index) in movies"
        :key="index"
      >
        <PopularMovie
          :image="movie.poster_path"
        />
      </b-list-group>
    </div>
  </article>
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

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  gap: 1rem;
}

.popular__header {
  color: white;
}
</style>
