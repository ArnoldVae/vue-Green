<template lang="pug">
  #app
    router-view
</template>

<style lang="scss">
@import "@/styles/common.scss";
body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: -3px;
  min-width: 1920px;
}
#app {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  height:100%;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #276cb6;
    }
  }
}
</style>
