<template>
  <div class="container" id="app">
    <div id="nav">
      <router-link to="/">Memories</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<style lang="scss">
#app {
  text-align: center;
  color: darkgrey;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: darkgrey;

    &.router-link-exact-active {
      color: lightskyblue;
    }
  }
}
</style>
