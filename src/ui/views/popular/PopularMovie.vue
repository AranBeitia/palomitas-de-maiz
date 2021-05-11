<template>
  <b-card
    overlay
    :img-src="`https://image.tmdb.org/t/p/original/${image}`"
  >
  </b-card>
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
