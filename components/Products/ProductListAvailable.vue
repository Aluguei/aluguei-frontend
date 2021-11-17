<template>
  <v-sheet class="rounded ma-8">
    <ProductDetailModal />
    <h3 class="pa-7">Lista de Produtos</h3>
    <v-row v-if="!isAvailableProductsLoading">
      <v-col v-for="(item, i) in availableProducts" :key="i">
        <ProductCardListItem
          :product="item"
          buttonIcon="mdi-cart"
          @click="handleClick"
        />
      </v-col>
    </v-row>
  </v-sheet>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import ProductCardListItem from './ProductCardListItem.vue'

import ProductDetailModal from '~/components/ProductDetailModal'

export default {
  components: { ProductCardListItem, ProductDetailModal },

  computed: {
    ...mapGetters({
      isAvailableProductsLoading: 'products/getIsAvailableProductsLoading',
      availableProducts: 'products/getAvailableProducts'
    })
  },

  mounted() {
    this.getAvailableProducts()
  },

  methods: {
    ...mapActions({
      getAvailableProducts: 'products/getAvailableProducts',
      setProduct: 'productDetailModal/setProduct',
      setProductDetailModalIsVisible: 'productDetailModal/setIsVisible'
    }),

    handleClick(product) {
      this.setProduct(product)
      this.setProductDetailModalIsVisible()
    }
  }
}
</script>

<style>
/** */
</style>
