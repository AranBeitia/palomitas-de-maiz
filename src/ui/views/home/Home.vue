<template>
  <div>
    <Carousel /><!--  ultimos lanzamientos -->
    <b-container>
      <section class="row">
        <article class="col-6">
          <h2>Más populares</h2> <!-- populares -->
          <PopularFeed />
        </article>
        <article class="col-6">
          <h2>Mejor puntuadas</h2><!--  mejor puntuadas -->
          <PopularFeed />
        </article>
      </section>
    </b-container>
  </div>
</template>

<script>
import Carousel from '@/ui/components/Carousel'
import PopularFeed from '@/ui/views/popular/PopularFeed'

export default {
  components: {
    Carousel,
    PopularFeed
  }
}
</script>
