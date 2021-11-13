<template>
  <v-app>
    <v-main class="bg-gray">
      <TopBar />
      <HeaderMain />
      <Nuxt />
    </v-main>
  </v-app>
</template>
<script>
import TopBar from "../components/Layout/TopBar.vue";
import HeaderMain from "../components/Layout/HeaderMain.vue";

export default {
  components: { HeaderMain, TopBar },
  middleware: "auth",
};
</script>
