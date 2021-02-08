<template>
  <div class="ads">
    <h1>광고</h1>
    <div class="photo">
      <span>sponsored</span>
    </div>
    <div class="contents_ads">
      <!-- {{ advertising.id }} -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Ads",
  props: ["ads"],
  data() {
    return {
      adsArr: this.ads,
    };
  },

  mounted: function () {
    console.log("ads", this.ads);
  },
};
</script>

