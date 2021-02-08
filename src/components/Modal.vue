<template>
  <div id="filter">
    <div id="overlay" @click="handleModalOpen"></div>
    <div id="contents_filter">
      <h2>필터</h2>
      <div>
        <div v-for="item in categoryArr" :key="item.id">
          <input type="checkbox" checked="isChecked" />
          <span>{{ item.name }}</span>
        </div>
      </div>
      <button>저장하기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ["isModalOpen", "openFilter"],
  data() {
    return {
      categoryArr: [],
      modalOpen: this.isModalOpen,
      isChecked: true,
    };
  },
  methods: {
    handleModalOpen() {
      this.openFilter();
    },

    getCategory() {
      this.$axios
        .get("https://problem.comento.kr/api/category")
        .then((response) => {
          console.log("filter", response.data);
          this.categoryArr = [...response.data.category];
        });
    },
  },
  created: function () {
    this.getCategory();
    console.log("ismodal?", this.modalOpen);
  },
};
</script>

<style lang="scss" scoped>
#filter {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  #overlay {
    background: rgba(0, 0, 0, 0.7);
    position: fixed;
    width: 100vw;
    height: 100vh;
  }

  #contents_filter {
    width: 460px;
    height: 268px;
    position: relative;
    padding: 15px 30px;
    background: white;
  }

  button {
    border: 0;
    background: #00c854;
    color: white;
    width: 55px;
    height: 19px;
    font-size: 16px;
  }
}
</style>