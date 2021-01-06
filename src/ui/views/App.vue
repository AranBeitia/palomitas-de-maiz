<template>
  <div id="app">
    <TheTopNav />
    <router-view />

    <img alt="Vue logo" src="@/ui/assets/img/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '@/ui/components/HelloWorld.vue'
import TheTopNav from '@/ui/views/nav/TheTopNav.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TheTopNav
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
