<template>
  <div id="app">
    <div id="scrollToTop" @click="scrollToTop">TOP</div>
    <div>
      <Nav />
      <Main />
    </div>
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

  methods: {
    // 최상단 이동 기능
    scrollToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
    // 최상단 이동 버튼
    topBtn() {
      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 100) {
        document.querySelector("#scrollToTop").style.visibility = "visible";
      } else {
        document.querySelector("#scrollToTop").style.visibility = "hidden";
      }
    },
  },

  mounted: function () {
    this.topBtn();
    window.addEventListener("scroll", this.topBtn);
  },
};
</script>
<style lang="scss" scoped>
#app {
  position: relative;
  #scrollToTop {
    background: rgba(128, 128, 128, 0.5);
    width: 25px;
    height: 25px;
    position: sticky;
    top: 95vh;
    left: 97.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    font-size: 10px;
  }
}
</style>