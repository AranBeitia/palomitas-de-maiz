<template>
  <footer class="container-fluid">
    <p class="text-center"> © {{year}} Palomitas de maiz</p>
    <b-nav class="footer-menu" visible-only-mobile>
      <b-nav-item>
        <router-link :to="{ name: 'Home' }"><font-awesome-icon icon="home" class="home"/></router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link :to="{ name: 'NowPlaying' }"><font-awesome-icon icon="film" class="film"/></router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link :to="{ name: 'Popular' }"><font-awesome-icon icon="star" class="star"/></router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link :to="{ name: 'Search' }"><font-awesome-icon icon="search" class="search"/></router-link>
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
.footer-menu {
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0.1rem;
  color: white;
  background-color: black;

  a {
    padding: 0.5rem;
    font-size: 2rem;
    color: #fff;

    &.router-link-exact-active {
      color: red;
    }
  }
}
</style>