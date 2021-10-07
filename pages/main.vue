<template>
  <v-app>
    <div class="bg-gray">
      <TopBar />
      <HeaderMain />
      <Categories />
      <Banner />
      <ProductList />
    </div>
  </v-app>
</template>
<script>
import TopBar from "../components/Layout/TopBar.vue";
import HeaderMain from "../components/Layout/HeaderMain.vue";
export default {
  components: { HeaderMain, TopBar },
  middleware: "auth",
  // middleware: false,
};
</script>
