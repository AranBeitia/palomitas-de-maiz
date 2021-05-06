<template>
  <div id="app">
    <TheTopNav id="nav"/>
    <router-view />
    <TheBottomNav />
  </div>
</template>

<script>
import TheTopNav from '@/ui/views/nav/TheTopNav'
import TheBottomNav from '@/ui/views/nav/TheBottomNav'
export default {
  name: 'App',
  components: {
    TheTopNav,
    TheBottomNav
  }
}
</script>
