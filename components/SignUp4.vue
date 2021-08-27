<template>
  <div class="flex-box container-box">
    <div class="content-box scroll-loading">
      <div class="flex">
        <img src="@/assets/img/backArrow.png" class="left-arrow" @click="goBack" />
      </div>
      <h2 class="h2">Cadastrando...</h2>
      <img src="@/assets/img/loading-logo.gif" />
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goBack() {
      this.$store.commit("screen/updateSignup3", true);
      this.$store.commit("screen/updateSignup4", false);
    },
  },
};
</script>
