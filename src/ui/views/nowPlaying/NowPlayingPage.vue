<template>
  <b-container>
    <h1 class="text-center mb-5">Ultimos lanzamientos</h1>
    <article class="grid-5-to-3">
      <section
        v-for="(latest, index) in nowPlaying"
        :key="index"
      >
        <router-link :to="`/movie/${latest.id}`">
          <b-card
            overlay
            :img-src="`https://image.tmdb.org/t/p/original/${latest.poster_path}`"
            :img-alt="latest.title"
            text-variant="white"
          >
          </b-card>
          <b-card-text>
            <h1>{{ latest.title }}</h1>
            <span>{{ latest.release_date }}</span>
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
