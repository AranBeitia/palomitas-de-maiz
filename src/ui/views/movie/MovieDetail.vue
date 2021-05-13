<template>
  <article class="movie-detail position-relative">
    <section class="movie-detail__hero" :style="`background-image: url(https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path})`">
      <b-button variant="outline-secondary" @click="backBehaviour">
        <font-awesome-icon icon="chevron-left"/>
        <span class="pl-3">Back</span>
      </b-button>
    </section>
    <b-container class="position-absolute">
      <header class="movie-detail__header">
          <!-- <span>{{ movieDetail.release_date.substring(0, 4) }}</span> -->
          <h1>{{ movieDetail.title }}</h1>
        <Modal />
      </header>
      <ul class="movie-detail__category-list d-flex justify-content-start">
        <li v-for="(genre, index) in movieDetail.genres" :key="index">
          <b-badge>{{ genre.name }}</b-badge>
        </li>
      </ul>
      <section class="movie-detail__ranking d-flex justify-content-between align-items-md-baseline pb-4">
        <div class="d-flex align-items-baseline">
          <ul class="movie-detail__category-list d-flex">
            <li><font-awesome-icon icon="star" class="star --actived"/></li>
            <li><font-awesome-icon icon="star" class="star --actived"/></li>
            <li><font-awesome-icon icon="star" class="star --actived"/></li>
            <li><font-awesome-icon icon="star" class="star"/></li>
            <li><font-awesome-icon icon="star" class="star"/></li>
          </ul>
          <span class="number text-heading-main">{{ movieDetail.vote_average }}</span>
        </div>
        <div class="d-flex align-items-baseline">
          <span class="text-tag text-uppercase">metascore</span>
          <span class="number text-heading-main">{{ movieDetail.vote_count}}</span>
        </div>
      </section>
      <section class="row">
        <div class="col-lg-6 d-flex">
          <img
            :src="`https://image.tmdb.org/t/p/original/${movieDetail.poster_path}`"
            :alt="movieDetail.title"
            class="movie-detail__image"
          />
          <ul class="movie-detail__info">
            <li><span class="title">title: </span>{{ movieDetail.title }}</li>
            <li><span class="title">release date: </span>{{ movieDetail.release_date }}</li>
            <li><span class="title">original title: </span>{{ movieDetail.original_title }}</li>
            <li><span class="title">original language: </span>{{ movieDetail.original_language }}</li>
          </ul>
        </div>
        <div class="col-lg-6">
          <h2>Storyline</h2>
          <p>{{ movieDetail.overview }}</p>
        </div>
      </section>
    </b-container>
  </article>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Modal from '@/ui/components/Modal'

export default {
  components: {
    Modal
  },
  created () {
    this.getMovieDetail(this.$route.params.id)
  },
  computed: {
    ...mapState('movie', ['movieDetail'])
  },
  methods: {
    ...mapActions('movie', ['getMovieDetail']),
    backBehaviour () {
      console.log('hi')
    }
  }
}
</script>

<style lang="scss" scoped>
.position-absolute {
  position: absolute;
  top: 40vh;
  left: 50%;
  transform: translate(-50%);
}
.number {
  margin-left: .5rem;
  color: yellow;
  font-style: italic;
}

.star {
  font-size: 1.5rem;

  @include is-mobile {
    font-size: 1rem;
  }

  &.--actived {
    color: yellow;
  }
}

.title {
  text-transform: capitalize;
  color: grey;
}

.movie-detail {
  &__hero {
    position: relative;
    padding-top: 25px;
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
    background-color: #464646;
    height: 50vh;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      bottom: -1px;
      background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
    }
  }

  &__header {
    display: flex;
    justify-content: space-between;
    // position: absolute;
    // top: -85px;
  }

  &__category-list {
    list-style: none;
    padding-inline-start: 0;
    padding: 1rem 0;

    li {
      max-width: 130px;
      text-transform: uppercase;

      &:not(:last-child){
        padding-right: 1rem;

        @include is-mobile {
          padding-right: .3rem;
        }
      }

      .badge {
        padding: .6rem 1.2rem;
        border-radius: 7px;
        background-color: transparent;
        border: 2px solid white;
      }
    }
  }

  &__ranking {
    
  }

  &__image {
    max-width: 200px;
    width: auto;

    @include is-mobile {
      max-width: 100px;
    }
  }

  &__info {
    list-style: none;
  }
}
</style>
