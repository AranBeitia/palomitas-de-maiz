<template>
  <div>
<!--     <pre>{{ ratedMovies }}</pre> -->
    <b-list-group 
      v-for="(rated, index) in ratedMovies.results"
      :key="index"
    >
      <RatedMovie
        :title="rated.title"
        :image="rated.poster_path"
      />
    </b-list-group>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import RatedMovie from '@/ui/views/rated/RatedMovie'

export default {
  components: {
    RatedMovie
  },
  computed: {
    ...mapState('rated', ['ratedMovies'])
  },
  created () {
    this.getRatedMovies()
  },
  methods: {
    ...mapActions('rated', ['getRatedMovies'])
  }
}
</script>
