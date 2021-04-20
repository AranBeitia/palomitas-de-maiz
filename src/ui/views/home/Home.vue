<template>
  <div>
    <Carousel />
    <b-container>
      <section class="row">
        <article class="col-6">
          <h2>Más populares</h2>
          <PopularList />
        </article>
        <article class="col-6">
          <h2>Mejor puntuadas</h2>
          <PopularList />
        </article>
      </section>
    </b-container>
  </div>
</template>

<script>
import Carousel from '@/ui/components/Carousel'
import PopularList from '@/ui/views/popular/PopularList.vue'

export default {
  components: {
    Carousel,
    PopularList
  }
}
</script>
