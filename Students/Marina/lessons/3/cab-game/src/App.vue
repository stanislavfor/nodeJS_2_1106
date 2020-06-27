<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Menu />
    <Attempts v-bind:max-attempts="10" />
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import Attempts from './components/Attempts.vue'

export default {
  name: 'App',
  components: {
    Menu,
    Attempts
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
  margin-top: 60px;
}
</style>
