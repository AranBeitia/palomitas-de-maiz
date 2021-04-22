<template>
  <b-list-group-item class="flex">
    <picture class="image-cropper">
      <img 
        :src="`https://image.tmdb.org/t/p/w500/${image}`"
        class="image"
      />
    </picture>
    <span>{{ title }}</span>
    <b-button :to="{ name: 'Movie' }" variant="outline-primary">Ver</b-button>
  </b-list-group-item>
</template>
<script>

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.image-cropper {
  width: 70px;
  height: 70px;
  overflow: hidden;
  border-radius: 50%;
}
.image {
  width: 70px;
  height: auto;
}
</style>