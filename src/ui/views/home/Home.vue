<template>
  <div>
    <NowPlayingCarousel />
    <b-container>
      <section class="my-5">
        <RatedFeed :limit="ratedMovieSize"/>
      </section>
      <section class="my-5">
        <PopularFeed />
      </section>
    </b-container>
  </div>
</template>

<script>
import NowPlayingCarousel from '@/ui/views/nowPlaying/NowPlayingCarousel'
import PopularFeed from '@/ui/views/popular/PopularFeed'
import RatedFeed from '@/ui/views/rated/RatedFeed'

export default {
  components: {
    NowPlayingCarousel,
    PopularFeed,
    RatedFeed
  },
  data () {
    return {
      ratedMovieSize: 5
    }
  }
}
</script>
