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
import HeaderMain from '../components/Layout/HeaderMain.vue'
import TopBar from '../components/Layout/TopBar.vue'

import ProductListAvailable from '~/components/Products/ProductListAvailable.vue'

export default {
  components: { HeaderMain, TopBar, ProductListAvailable },
  middleware: 'auth'
}
</script>
