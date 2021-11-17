<template>
  <v-sheet class="rounded ma-8">
    <ProductDetailModal />

    <h3 class="pa-7">Lista de Produtos</h3>
    <v-row v-if="true">
      <v-col v-for="(item, i) in availableProducts" :key="i">
        <ProductCardListItem :product="item" />
      </v-col>
    </v-row>
    <div v-else class="d-flex align-center justify-center">
      <Loading />
    </div>
  </v-sheet>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import ProductCardListItem from './ProductCardListItem.vue'

import ProductDetailModal from '~/components/ProductDetailModal'

import Loading from '~/components/Loading'

export default {
  components: { Loading, ProductCardListItem, ProductDetailModal },

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
      getAvailableProducts: 'products/getAvailableProducts'
    })
  }
}
</script>

<style>
/** */
</style>
