<template>
  <div class="card" @click="goToDetails">
    <div class="card_container">
      <div class="content_detail">
        <span>{{
          feed.category_id === 1
            ? "apple"
            : feed.category_id === 2
            ? "banana"
            : "coconut"
        }}</span>
        <span>{{ feed.id }}</span>
      </div>
      <div class="division_line"></div>
      <div class="card_detail">
        <span>{{ feed.user_id }}</span>
        <span> | </span>
        <span>{{ feed.created_at }}</span>
      </div>
      <div class="card_title">{{ feed.title }}</div>
      <div class="summary">{{ feed.contents }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["feed"],
  data() {
    return {
      options: {
        params: {
          id: this.feed.id,
        },
      },
      contents: {},
    };
  },
  mounted: function () {
    console.log("feed", this.feed);
  },
  methods: {
    goToDetails() {
      this.$router.push({
        name: "details",
        params: {
          id: this.feed.id,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid black;

  .card_container {
    padding: 10px;

    .division_line {
      border: 1px solid #e1e4e7;
    }
  }
}
</style>