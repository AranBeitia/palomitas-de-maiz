<template>
  <b-list-group-item>
    <img
      :src="`https://image.tmdb.org/t/p/original/${image}`"
      class="image"
    />
  </b-list-group-item>
</template>
<script>

export default {
  props: {
    image: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.list-group-item {
  padding: 0;
}
.image {
  max-width: 375px;
  width: 100%;
  height: auto;
}
</style>