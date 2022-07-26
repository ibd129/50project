<template>
  <div  class="navInfo"><router-link to="/">🔻</router-link></div>
  <router-view/>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  color: #2c3e50;
  text-align: center;
}
body{
  margin: 0;
}
a{
    text-decoration: none;
}
.navInfo{
  position: fixed;
  left: 50%;
  z-index: 1;
  opacity:0.5;
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
