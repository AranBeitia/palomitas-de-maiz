<template>
  <div>
    <b-carousel
      v-model="slide"
      :interval="8000"
      controls
      background="#ababab"
      img-width="100%"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <div v-for="(playingMovie, index) in nowPlaying"
        :key="index">
        <b-carousel-slide
          :caption="playingMovie.title"
          :text="playingMovie.overview"
          :img-src="`https://image.tmdb.org/t/p/original/${playingMovie.backdrop_path}`"
        ></b-carousel-slide>
      </div>
    </b-carousel>
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

<style lang="scss">
.carousel-item {
  height: 50vh;

  @include is-tablet {
    height: auto;
  }
}

.carousel-caption {
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);

  p {
    margin: 0 10rem;

    @include is-tablet {
      margin: 0 .5rem;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
}
</style>