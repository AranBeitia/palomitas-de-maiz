<template>
  <b-navbar variant="faded" type="dark" class="container-fluid" hidden-in-mobile>
    <router-link :to="{ name: 'Home' }" class="navbar-brand">
      <img src="@/ui/assets/img/logo.png" width="30" height="30" alt="peliculas">
    </router-link>
    <b-nav>
      <b-nav-item :to="{ name: 'Home' }">home</b-nav-item>
      <b-nav-item :to="{ name: 'NowPlaying' }">latest</b-nav-item>
      <b-nav-item :to="{ name: 'Popular' }">popular</b-nav-item>
      <b-nav-item :to="{ name: 'Search' }">search</b-nav-item>
    </b-nav>
  </b-navbar>
</template>

<style lang="scss" scoped>
.nav {
  a {
    font-weight: bold;
    color: #fff;

    &.router-link-exact-active {
      border-bottom: 5px solid #fff;
    }
  }
}
</style>
