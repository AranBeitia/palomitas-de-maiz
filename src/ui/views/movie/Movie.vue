<template>
  <div class="movie-detail">
    <div class="movie-detail__inner">
      <b-container>
        <section class="row">
          <article class="col-6">
            <font-awesome-icon icon="home"/>
            <font-awesome-icon icon="building"/>
            <Modal />
          </article>
        </section>
      </b-container>
    </div>
  </div>
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

  &__inner {
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
}
</style>
