<template>
  <footer class="container-fluid">
    <p class="text-center"> © {{year}} Palomitas de maiz</p>
    <b-nav visible-only-mobile>
      <b-nav-item>
        <router-link :to="{ name: 'Home' }" class="nav-link">home</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link :to="{ name: 'NowPlaying' }" class="nav-link">latest</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link :to="{ name: 'Popular' }" class="nav-link">popular</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link :to="{ name: 'Search' }" class="nav-link">search</router-link>
      </b-nav-item>
    </b-nav>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>