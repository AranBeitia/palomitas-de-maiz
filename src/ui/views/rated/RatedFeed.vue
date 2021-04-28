<template>
  <article class="grid">
    <header class="rated__header">
      <h1>Latest films</h1>
      <h2>This week</h2>
      <p>Update of the releases that are appearing on movie theaters</p>
    </header>
    <b-list-group 
      v-for="(rated, index) in ratedMovies"
      :key="index"
    >
      <RatedMovie
        :image="rated.backdrop_path"
      />
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
    console.log(this.getRatedMovies())
    this.getRatedMovies(this.limit)
  },
  methods: {
    ...mapActions('rated', ['getRatedMovies'])
  }
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
}

.rated__header {
  color: white;
}
</style>
