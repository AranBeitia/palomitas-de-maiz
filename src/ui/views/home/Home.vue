<template>
  <div>
    <Carousel />
    <b-container>
      <section class="row">
        <article class="col-6">
          <h2>Más populares</h2>
          <PopularList :movies="movies"/>
        </article>
        <article class="col-6">
          <h2>Mejor puntuadas</h2>
          <b-list-group>
            <b-list-group-item :to="{ name: 'Movie' }">Awesome link</b-list-group-item>
            <b-list-group-item href="#" active>Link with active state</b-list-group-item>
            <b-list-group-item href="#">Action links are easy</b-list-group-item>
            <b-list-group-item href="#foobar" disabled>Disabled link</b-list-group-item>
          </b-list-group>
        </article>
      </section>
    </b-container>
  </div>
</template>

<script>
import Carousel from '@/ui/components/Carousel'
import PopularList from '@/ui/views/popular/PopularList.vue'

import data from '@/ui/views/home/mock.json'

export default {
  components: {
    Carousel,
    PopularList
  },
  data () {
    return {
      movies: data.movies
    }
  }
}
</script>
