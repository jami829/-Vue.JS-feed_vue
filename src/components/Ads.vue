<template>
  <div class="ads">
    <div class="container_ads">
      <span>sponsored</span>
      <div class="photo">
        <img :src="`https://cdn.comento.kr/assignment/${ads.img}`" />
      </div>
      <div class="cotents_box_ads">
        <div class="title_ads">{{ ads.title }}</div>
        <div class="contents_ads">{{ ads.contents }}</div>
      </div>
    </div>
    <div class="contents_ads"></div>
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

<style lang="scss" scoped>
.ads {
  margin: 20px 10px;
  border: 1px solid gray;
}
</style>