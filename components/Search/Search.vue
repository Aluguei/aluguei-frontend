<template>
  <div class="search bg-white">
    <div class="d-flex">
      <v-text-field
        :value="productsSearch.productName"
        class="mx-4"
        flat
        hide-details
        label="Buscar produtos, marcas e muito mais..."
        solo
        @input="setChange"
        @keyup="handleKeyUp"
      />
      <v-btn
        class="bg-blue-medium px-7 py-1 ma-1 rounded-xl height-auto"
        type="button"
        @click="searchProducts"
      >
        <h6><v-icon class="color-white">mdi-magnify</v-icon></h6>
      </v-btn>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      productsSearch: 'products/getProductsSearch'
    })
  },

  methods: {
    ...mapActions({
      setProductsSearch: 'products/setProductsSearch',
      getAvailableProducts: 'products/getAvailableProducts'
    }),

    setChange(v) {
      this.setProductsSearch({ productName: v })
    },

    searchProducts() {
      if (this.$route.path.includes('/produtos')) {
        this.getAvailableProducts()
      } else {
        this.$router.push({
          name: 'productsList'
        })
      }
    },

    handleKeyUp(k) {
      if (k.code.toLowerCase() === 'enter') this.searchProducts()
    }
  }
}
</script>
