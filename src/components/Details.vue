<template>
  <div>
    <div class="container_details">
      <div class="title_details">{{ details.title }}</div>
      <div class="contents_details">{{ details.contents }}</div>
      <div class="createdAt_details">{{ details.created_at }}</div>
    </div>
    <div class="container_reply">
      <div class="count">답변 {{ details.reply.length }}</div>
      <div v-for="item in details.reply" :key="item.id" id="detail">
        <div class="box_reply">
          <div>{{ item.user.name }}</div>
          <div class="division_reply"></div>
          <div>{{ item.contents }}</div>
          <div>{{ item.created_at }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Details",
  data() {
    return {
      options: {
        params: {
          id: this.feedId,
        },
      },
      details: {},
    };
  },
  // 주소에 삽입된 params의 결과값을 반환하기 위해 compute사용
  computed: {
    feedId: function () {
      return this.$route.params.id;
    },
  },
  created: function () {
    this.options.params.id = this.feedId;

    this.$axios
      .get("https://problem.comento.kr/api/view", this.options)
      .then((response) => {
        console.log("뭘받아옴?", response.data.data);
        this.details = response.data.data;
        console.log("잘 받았어?!ㅂ", this.details);
      });
  },
};
</script>

<style>
</style>