<template>
  <div id="main">
    <div id="login_btn" @click="[setData(), setCategory()]">로그인</div>
    <div v-for="(feed, idx) in feedArr" :key="feed.id">
      <Card :feed="feed" />
      <!-- 페이지당 받아오는 광고는 10개이지만 게시할 수 있는 광고는 페이지당 약 3개.
           따라서 어느 광고를 게시할지 특정이 되지 않아 받아온 광고를 배열에 저장 후 랜덤으로 게시하게 설정 -->
      <Ads
        :ads="adsArr[Math.floor(Math.random() * adsArr.length)]"
        v-if="(idx + 1) % 3 === 0"
      />
    </div>

    <div v-if="loading">로딩 중...</div>
  </div>
</template>

<script>
import Card from "./Card";
import Ads from "./Ads";

export default {
  name: "Main",
  components: {
    Card,
    Ads,
  },
  data() {
    return {
      feedArr: [],
      adsArr: [],
      data: [],
      categoryArr: [],
      options: {
        params: {
          page: 1,
          ord: "asc",
          limit: 10,
          category: [1, 2, 3],
        },
      },
      loading: false,
    };
  },
  methods: {
    setCategory() {
      this.$axios
        .get("https://problem.comento.kr/api/category")
        .then((response) => {
          this.categoryArr = [...response.data.category];
        });
    },

    // 무한 스크롤 피드 받아오기: API로부터 받아온 페이지 데이터를 이용해 다음 데이터 로드
    getFeeds() {
      // 데이터를 받아오는 동안 로딩바 렌더
      this.loading = true;
      this.$axios
        .get("https://problem.comento.kr/api/list", this.options)
        .then((response) => {
          console.log("next page", response.data.data);
          // 기존 state 값의 불변성 유지를 위해 새로운 배열에 spread를 사용해 새로운 배열에 구현
          this.feedArr = [...this.feedArr, ...response.data.data];
          console.log("new Feeds", this.feedArr);
        });
      // 데이터를 받아오면 로딩바 해제
      this.loading = false;
    },

    getAdsList() {
      this.$axios
        .get("https://problem.comento.kr/api/ads", this.options)
        .then((response) => {
          this.adsArr = [...this.adsArr, ...response.data.data];
          console.log("광고", this.adsArr);
        });
    },

    // 무한 스트롤 이벤트 핸들러
    async handleScroll() {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight) {
        this.options.params.page = this.options.params.page + 1; // 기존 state의 page 값을 변경시킨 후 axios로 다음 페이지 feeds를 불러오게 한다.
        // console.log("변경된 페이지", this.options.params.page);
        // 페이지 끝에 도달하면 추가 데이터를 받아온다.
        await this.getAdsList();
        await this.getFeeds();
      }
    },
  },
  // 스크롤 전 리스트
  created: async function () {
    await this.getAdsList();
    await this.getFeeds();
  },
  updated: function () {
    // console.log("feedArrt", this.feedArr);
    // console.log("categoryArr", this.categoryArr);
    // scroll event listner 등록
    window.addEventListener("scroll", this.handleScroll);
  },
  // scroll event listner 해제
  destroyed: function () {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
</style>