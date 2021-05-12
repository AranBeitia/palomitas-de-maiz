<template>
  <article class="grid-3-to-2">
    <header class="rated__header">
      <h1>Top movies</h1>
      <h2>Rated by users</h2>
      <p>Movies with 40 or more critic reviews. Eligible movies are ranked based on their Adjusted Scores.</p>
    </header>
    <b-list-group
      v-for="(rated, index) in ratedMovies"
      :key="index"
    >
      <router-link :to="`/movie/${rated.id}`">
        <RatedMovie
          :image="rated.backdrop_path"
        />
      </router-link>
    </b-list-group>
  </article>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import RatedMovie from '@/ui/views/rated/RatedMovie'

export default {
  components: {
    RatedMovie
  },
  props: {
    limit: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapState('rated', ['ratedMovies'])
  },
  created () {
    this.getRatedMovies(this.limit)
  },
  methods: {
    ...mapActions('rated', ['getRatedMovies'])
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
