<template>
  <div class="ads">
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
  props: ["contents"],
  created: function () {
    console.log("ads", this.contents);
  },
};
</script>

