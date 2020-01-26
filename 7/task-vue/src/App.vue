<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Tasks msg="Welcome to Your Vue.js App" width="300px"/>
  </div>
</template>

<script>
import Tasks from './components/Tasks.vue'

export default {
  name: 'app',
  components: {
    Tasks
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  list-style-type: none;
}
</style>
