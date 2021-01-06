<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="./index.html">
        <img src="@/ui/assets/img/logo.png" width="30" height="30" alt="peliculas">
      </a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="./index.html" class="nav-link active">home</a>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'NowPlaying' }" class="nav-link">ultimos lanzamientos</router-link>
          </li>
          <li class="nav-item">
            <a href="./popular.html" class="nav-link">populares</a>
          </li>
          <li class="nav-item">
            <a href="./search.html" class="nav-link">buscador</a>
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