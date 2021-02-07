<template>
  <div id="main">
    <div id="login_btn" @click="[setData(), setCategory()]">로그인</div>
    <div v-for="feed in feedArr" :key="feed.id">
      <Card :feed="feed" />
    </div>
  </div>
</template>

<script>
import Card from "./Card";

export default {
  name: "Main",
  components: {
    Card,
  },
  data() {
    return {
      feedArr: [],
      categoryArr: [],
      options: {
        params: {
          page: 1,
          ord: "asc",
          limit: 10,
          category: [1, 2, 3],
        },
      },
    };
  },
  methods: {
    setData() {
      this.$axios
        .get("https://problem.comento.kr/api/list", this.options)
        .then((response) => {
          this.feedArr = [...response.data.data];
        });
    },
    setCategory() {
      this.$axios
        .get("https://problem.comento.kr/api/category")
        .then((response) => {
          this.categoryArr = [...response.data.category];
        });
    },
  },
  updated: function () {
    console.log("feedArrt", this.feedArr);
    console.log("categoryArr", this.categoryArr);
  },
};
</script>

<style scoped>
</style>