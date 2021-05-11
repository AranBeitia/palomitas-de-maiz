<template>
  <article class="grid-3-to-2">
    <header class="rated__header">
      <h1>Latest films</h1>
      <h2>This week</h2>
      <p>Update of the releases that are appearing on movie theaters</p>
    </header>
    <b-list-group
      v-for="(rated, index) in ratedMovies"
      :key="index"
    >
      <router-link :to="`/movie/${rated.id}`">
        <RatedMovie
          v-if="index <=limit"
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
