<template>
  <div class="ads">
    <h1>현재 페이지 {{ page }}</h1>
    <h1>광고</h1>
    <div class="photo">
      <span>sponsored</span>
    </div>
    <div class="contents_ads"></div>
  </div>
</template>

<script>
export default {
  name: "Ads",
  props: ["page"],
};
</script>

