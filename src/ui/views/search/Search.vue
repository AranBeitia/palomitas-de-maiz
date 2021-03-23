<template>
  <div class="conainer mt-5">
    <h1 class="text-center mb-5">Buscador de películas</h1>
    <input type="text" id="search-movie" class="form-control search" placeholder="Busca una película"
      onkeyup="searchMovies()" />
    <div class="row list-cards"></div>
  </div>
</template>