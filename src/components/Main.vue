<template>
  <div id="main">
    <div id="login_btn" @click="setData">로그인</div>
    <div>
      <Card />
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
          console.log("뭘받아옴?", response.data);
        });
    },
  },
};
</script>

<style scoped>
</style>