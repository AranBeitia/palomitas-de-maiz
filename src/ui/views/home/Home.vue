<template>
  <div>
    <Carousel />
    <b-container>
      <section class="row">
        <article class="col-6">
          <h2>Más populares</h2>
          <button @click="getMovies">get Movies</button>
          <pre>{{renderMovies.results}}</pre>
          <b-list-group>
            <b-list-group-item :to="{ name: 'Movie' }">Awesome link</b-list-group-item>
            <b-list-group-item href="#" active>Link with active state</b-list-group-item>
            <b-list-group-item href="#">Action links are easy</b-list-group-item>
            <b-list-group-item href="#foobar" disabled>Disabled link</b-list-group-item>
          </b-list-group>
        </article>
        <article class="col-6">
          <h2>Mejor puntuadas</h2>
          <b-list-group>
            <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
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
import Request from '@/ui/views/home/homeRequest.js'

export default {
  components: {
    Carousel
  },
  methods: {
    getMovies () {
      Request.getMovies()
    },
    renderMovies () {
      Request.renderMovies()
    }
  }
}
</script>
