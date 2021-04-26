<template>
  <article class="movie-detail">
    <div class="movie-detail__inner pt-5">
      <b-container>
        <section class="row">
          <article class="col-5">
            <img 
              src="https://image.tmdb.org/t/p/original/3tZwNIVrax1IV5BkGzWTYMmjYI5.jpg" 
              alt="Mortal Kombat" 
              class="img-fluid movie-detail__image"
            />
          </article>
          <article class="col-7">
            <header class="movie-detail__header">
              <h1>Mortal Kombat</h1>
              <span>2021</span>
              <Modal />
            </header>
            <h2>General</h2>
            <p>Overview</p>
            <h2>Generos</h2>
            <ul>
              <li>generos 1</li>
              <li>generos 2</li>
            </ul>
          </article>
        </section>
      </b-container>
    </div>
  </article>
</template>

<script>
import Modal from '@/ui/components/Modal'

export default {
  components: {
    Modal
  }
}
</script>

<style lang="scss" scoped>
.movie-detail {
  background-position: center center;
  background-image: url("https://image.tmdb.org/t/p/original/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-color: #464646;
  height: calc(100vh - 60px);
  color: white;

  &__inner {
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }

  &__image {
    border: 2px solid white;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
