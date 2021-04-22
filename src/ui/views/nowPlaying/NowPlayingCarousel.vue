<template>
  <div>
    <b-carousel
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="100%"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <div v-for="(playingMovie, index) in nowPlaying.results"
        :key="index">
        <b-carousel-slide
          :caption="playingMovie.title"
          :text="playingMovie.overview"
          :img-src="`https://image.tmdb.org/t/p/original/${playingMovie.backdrop_path}`"
        ></b-carousel-slide>
      </div>
    </b-carousel>

    <!-- <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p> -->
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    computed: {
      ...mapState('nowPlaying', ['nowPlaying'])
    },
    created () {
      this.getNowPlaying()
    },
    methods: {
      ...mapActions('nowPlaying', ['getNowPlaying']),
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>

<style>
.carousel-item {
  height: 50vh;
}
</style>