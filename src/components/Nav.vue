<template>
  <div id="nav">
    <div id="contents">'[제출일] 이름'을 작성해주세요 :)</div>
  </div>
</template>

<script>
export default {
  name: "nav",
};
</script>

<style lang="scss" scoped>
#nav {
  height: 70px;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.07);
  display: flex;
  align-items: center;

  #contents {
    font-size: 16px;
    margin-left: 190px;
  }
}
</style>