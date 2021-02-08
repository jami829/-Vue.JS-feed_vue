<template>
  <div id="app">
    <div id="scrollToTop" @click="scrollToTop">TOP</div>
    <Modal
      :isModalOpen="isModalOpen"
      :openFilter="openFilter"
      v-if="isModalOpen"
    />
    <Nav />
    <div id="filter_btn" @click="openFilter">필터</div>
    <router-view></router-view>
  </div>
</template>

<script>
import Modal from "./components/Modal";
import Nav from "./components/Nav";

export default {
  name: "App",
  components: {
    Modal,
    Nav,
  },
  data() {
    return {
      isModalOpen: false,
    };
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
    // 최상단 이동 버튼: 스크롤을 내리면 버튼이 보이게 함.
    topBtn() {
      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 100) {
        document.querySelector("#scrollToTop").style.display = "flex";
      } else {
        document.querySelector("#scrollToTop").style.display = "none";
      }
    },

    openFilter() {
      this.isModalOpen = !this.isModalOpen;
    },
  },

  mounted: function () {
    this.topBtn();
    window.addEventListener("scroll", this.topBtn);
  },
  updated: function () {
    console.log("필터 모달 상태", this.isModalOpen);
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