<template>
  <div class="bg-gray">
    <Banner />
    <ProductListAvailable />
  </div>
</template>
<script>
import HeaderMain from '../components/Layout/HeaderMain.vue'
import TopBar from '../components/Layout/TopBar.vue'

import ProductListAvailable from '~/components/Products/ProductListAvailable.vue'

export default {
  layout: 'main',
  components: { HeaderMain, TopBar, ProductListAvailable },
  middleware: 'auth'
}
</script>
