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

    // 무한 스크롤 피드 받아오기: API로부터 받아온 페이지 데이터를 이용해 다음 데이터 로드
    fetchMoreFeeds() {
      this.$axios
        .get("https://problem.comento.kr/api/list", this.options)
        .then((response) => {
          console.log("next page", response.data.data);
          // 기존 state 값의 불변성 유지를 위해 새로운 배열에 spread를 사용해 새로운 배열에 구현
          this.feedArr = [...this.feedArr, ...response.data.data];
          console.log("new Feeds", this.feedArr);
        });
    },

    // 무한 스트롤 이벤트 핸들러
    handleScroll() {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight) {
        this.options.params.page = this.options.params.page + 1; // 기존 state의 page 값을 변경시킨 후 axios로 다음 페이지 feeds를 불러오게 한다.
        // console.log("변경된 페이지", this.options.params.page);
        // 페이지 끝에 도달하면 추가 데이터를 받아온다.
        this.fetchMoreFeeds();
      }
    },
  },
  created: function () {
    this.setData();
  },
  updated: function () {
    // console.log("feedArrt", this.feedArr);
    // console.log("categoryArr", this.categoryArr);
    // scroll event listner 등록
    window.addEventListener("scroll", this.handleScroll);
  },
  // scroll event listner 해제
  // destroyed: function () {
  //   window.removeEventListener("scroll", this.handleScroll);
  // },
};
</script>

<style scoped>
</style>