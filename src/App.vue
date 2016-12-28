<template>
  <div id="app">
    <header-component />
    <img class="fun" src="http://onejiall.oss-cn-beijing.aliyuncs.com/picture/930505.png" />
    <img class="fun" src="http://onejiall.oss-cn-beijing.aliyuncs.com/picture/930500.png" />
    <img class="fun" src="http://onejiall.oss-cn-beijing.aliyuncs.com/picture/930502.png" />
    <img class="fun" src="http://onejiall.oss-cn-beijing.aliyuncs.com/picture/930503.png" />
  </div>
</template>

<script>

import headerComponent from './components/header.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: '一即一切,一切即一'
    }
  },
  components:{
    'headerComponent':headerComponent,
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

img.fun {
  width:800px;
  height:600px;
  display:block;
  margin:auto;
  padding-top:20px;
}

</style>
