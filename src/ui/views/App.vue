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
