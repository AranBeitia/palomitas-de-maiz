<template>
  <div>
    <!-- <pre>{{ movies.results }}</pre> -->
    <b-list-group v-for="(movie, index) in movies.results" :key="index">
      <b-list-group-item :to="{ name: 'Movie' }" class="flex">
        <span>{{ movie.original_title }}</span>
        <img 
          :src="`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`"
          class="image"
        />
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState('popular', ['movies'])
  },
    created () {
    this.getMovies()
  },
    methods: {
    ...mapActions('popular',['getMovies']),
    getImageUrl () {
      const API_URL= 'https://image.tmdb.org/t/p/w500/'
      return API_URL
    }
  }
}
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.image {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
</style>
