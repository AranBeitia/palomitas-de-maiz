<template>
  <b-container>
    <h1 class="text-center mb-5">Ultimos lanzamientos</h1>
    <article class="grid-5-to-3">
      <router-link
        v-for="(latest, index) in nowPlaying"
        :key="index"
        :to="`/movie/${latest.id}`"
      >
        <b-card
          overlay
          :img-src="`https://image.tmdb.org/t/p/original/${latest.poster_path}`"
          :img-alt="latest.title"
          text-variant="white"
        >
        </b-card>
        <b-card-text class="list-text">
          <p class="text-body-main-bold">{{ latest.title }}</p>
          <span>{{ latest.release_date }}</span>
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
    ...mapState('nowPlaying', ['nowPlaying'])
  },
  created () {
    this.getNowPlaying()
  },
  methods: {
    ...mapActions('nowPlaying', ['getNowPlaying'])
  }
}
</script>

<style lang="scss" scoped>
.list-text {
  color: var(--white);
}
</style>
