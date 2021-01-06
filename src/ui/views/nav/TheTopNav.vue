<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link :to="{ name: 'Home' }" class="navbar-brand">
        <img src="@/ui/assets/img/logo.png" width="30" height="30" alt="peliculas">
      </router-link>>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link :to="{ name: 'Home' }" class="nav-link">home</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'NowPlaying' }" class="nav-link">ultimos lanzamientos</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Popular' }" class="nav-link">populares</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Search' }" class="nav-link">buscador</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'TheTopNav'
}
</script>