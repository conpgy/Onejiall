<template>
  <div id="app">
    <navbar />
    <div class="container">
      <router-view />
    </div>

  </div>
</template>

<script>

import Navbar from './components/navbar.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: '一即一切,一切即一'
    }
  },
  components:{
    Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  padding: 0;
}

.container {
  padding:20px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

</style>
