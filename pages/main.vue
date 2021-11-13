<template>
  <div class="bg-gray">
    <TopBar />
    <HeaderMain />
    <Categories />
    <Banner />
    <ProductListAvailable />
  </div>
</template>
<script>
import TopBar from '../components/Layout/TopBar.vue'
import HeaderMain from '../components/Layout/HeaderMain.vue'

export default {
  components: { HeaderMain, TopBar },
  middleware: 'auth'
}
</script>
