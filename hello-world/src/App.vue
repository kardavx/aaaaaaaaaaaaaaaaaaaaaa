<template>
  <div id="app">
    <login-box>essa</login-box>
  </div>
</template>

<script>
import LoginBox from './components/LoginBox.vue'

export default {
  name: 'App',
  components: {
    LoginBox
  }
}
</script>

<style>

#app {
  position: center;
}

html,
body {
  background-color:rgb(51, 51, 51);
}

</style>
