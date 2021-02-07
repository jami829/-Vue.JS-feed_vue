<template>
  <div id="main">
    <div id="login_btn">로그인</div>
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
};
</script>

<style scoped>
</style>