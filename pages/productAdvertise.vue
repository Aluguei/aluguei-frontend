<template>
  <ProductAdvertise />
</template>

<script>
import { mapActions } from 'vuex'

export default {
  layout: 'main',

  mounted() {
    this.getAvailableProducts()
  },

  methods: {
    ...mapActions({
      getAvailableProducts: 'products/getAvailableProducts'
    })
  }
}
</script>
