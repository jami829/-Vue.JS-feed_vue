<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Nav />
    <Main />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Main from "./components/Main.vue";

export default {
  name: "App",
  components: {
    Nav,
    Main,
  },
};
</script>
