<template>
  <div id="app">
    <TheTopNav id="nav"/>
    <router-view />
  </div>
</template>

<script>
import TheTopNav from '@/ui/views/nav/TheTopNav.vue'

export default {
  name: 'App',
  components: {
    TheTopNav
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  a{
    font-weight: bold;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
