<template>
  <b-navbar variant="faded" type="dark" class="container-fluid" hidden-in-mobile>
    <router-link :to="{ name: 'Home' }" class="navbar-brand">
      <img src="@/ui/assets/img/logo.png" width="30" height="30" alt="peliculas">
    </router-link>
    <b-nav class="nav">
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
