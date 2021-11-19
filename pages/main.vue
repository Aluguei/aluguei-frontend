<template>
  <div class="bg-gray">
    <ProductListAvailable />
  </div>
</template>
<script>
import ProductListAvailable from '~/components/Products/ProductListAvailable.vue'

export default {
  components: { ProductListAvailable },
  layout: 'main',
  middleware: 'auth'
}
</script>
