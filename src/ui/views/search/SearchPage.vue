<template>
  <div class="container mt-5">
    <h1 class="text-center mb-5">Buscador de películas</h1>
    <form action="" class="search-form">
      <b-form-input type="search" class="search-input" placeholder="Busca una película"></b-form-input>
      <font-awesome-icon icon="search" class="search-icon"/>
    </form>
    <div class="row list-cards"></div>
  </div>
</template>

<style lang="scss" scoped>
.search {
  &-form {
    position: relative;
    margin: auto;
    transition: all 1s;
    width: 50px;
    height: 50px;
    background: white;
    box-sizing: border-box;
    border-radius: 25px;
    border: 4px solid white;
    padding: 5px;

    &:hover{
      width: 200px;
      cursor: pointer;
    }

    &:hover input{
      display: block;
    }

    &:hover .search-icon {
      background: #07051a;
      color: white;
    }
  }

  &-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 42.5px;
    line-height: 30px;
    outline: 0;
    border: 0;
    display: none;
    font-size: 1em;
    border-radius: 20px;
    padding: 0 20px;
    outline: 1px solid red;
  }

  &-icon {
    box-sizing: border-box;
    padding: 10px;
    width: 42.5px;
    height: 42.5px;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 50%;
    color: #07051a;
    text-align: center;
    font-size: 1.2em;
    transition: all 1s;
  }
}
</style>