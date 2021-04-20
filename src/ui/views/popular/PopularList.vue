<template>
  <div>
    <b-list-group v-for="(movie, index) in movies" :key="index">
      <b-list-group-item :to="{ name: 'Movie' }">{{ movie.original_title }}</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>

export default {
  props: {
    movies: {
      type: Object,
      required: true
    }
  }
}
</script>
