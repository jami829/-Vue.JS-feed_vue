<template>
  <div class="card">
    <div class="card_container">
      <div class="content_detail">카테고리 이름: 문템, 콘텐츠 아이디:문템</div>
      <div class="division_line"></div>
      <div class="card_detail">
        <span>유저아이디:문템</span>
        <span> | </span>
        <span>생성일:문템</span>
      </div>
      <div class="card_title">타이틀:문템 ... 추가</div>
      <div class="summary">요약:문템 ... 추가</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
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