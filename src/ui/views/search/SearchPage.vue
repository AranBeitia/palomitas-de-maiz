<template>
  <b-container class="mt-5">
    <h1 class="text-center mb-5">Buscador de películas</h1>
    <form action="" class="search-form">
      <b-form-input type="search" v-model="textSearch" class="search-input" placeholder="Busca una película" @keyup="hello"></b-form-input>
      <font-awesome-icon icon="search" class="search-icon"/>
    </form>

    <article class="grid-5-to-3">
      <section
        v-for="(movie, index) in searchMovie"
        :key="index"
      >
        <router-link :to="`/movie/${movie.id}`">
          <b-card
            overlay
            :img-src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`"
            :img-alt="movie.title"
            text-variant="white"
          >
          </b-card>
          <b-card-text>
            <h1>{{ movie.title }}</h1>
            <span>{{ movie.release_date }}</span>
          </b-card-text>
        </router-link>
      </section>
    </article>
  </b-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      textSearch: ''
    }
  },
  computed: {
    ...mapState('search', ['searchMovie'])
  },
  // created () {
  //   this.getSearchMovie(this.textSearch)
  // },
  methods: {
    ...mapActions('search', ['getSearchMovie']),
    hello () {
      if (this.textSearch.length < 3) return
      this.textSearch
      this.getSearchMovie(this.textSearch)
    }
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

.search {
  &-form {
    position: relative;
    margin: auto;
    transition: all .5s;
    width: 50px;
    height: 50px;
    background: white;
    box-sizing: border-box;
    border-radius: 25px;
    border: 4px solid white;
    padding: 5px;

    &:hover{
      width: 300px;
      cursor: pointer;
    }

    &:hover input{
      display: block;
    }

    &:hover .search-icon {
      background: #07051a;
      color: white;
    }
  }

  &-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 42.5px;
    line-height: 30px;
    outline: 0;
    border: 0;
    display: none;
    font-size: 1rem;
    border-radius: 20px;
    padding: 0 20px;
  }

  &-icon {
    box-sizing: border-box;
    padding: 10px;
    width: 42.5px;
    height: 42.5px;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 50%;
    color: #07051a;
    text-align: center;
    font-size: 1.2em;
    transition: all 1s;
  }
}
</style>