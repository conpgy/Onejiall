<template>
  <div id="app">
    <navbar :is-login="isLogin" :nickname="nickname" />
    <div class="container">
      <router-view />
    </div>

  </div>
</template>

<script>

import Navbar from './components/navbar.vue'
import {mapState} from 'vuex'
import * as types from './store/mutation-types'

export default {
  name: 'app',
  data () {
    return {
      msg: '一即一切,一切即一'
    }
  },
  created: function() {
    if(localStorage && localStorage.getItem("nickname")) {
      this.$store.commit(types.LOGIN_SUCCESS)
    }
  },
  computed: mapState([
      'isLogin',
	  'nickname'
  ]),
  components: {
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


</style>
