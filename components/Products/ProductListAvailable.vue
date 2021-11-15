<template>
  <v-sheet class="rounded ma-8">
    <h3 class="pa-7">Lista de Produtos</h3>
    <div v-if="true" class="wrap-products">
      <ProductCardListItem
        v-for="(item, i) in availableProducts"
        :key="i"
        :product="item"
      />
    </div>
    <div v-else class="d-flex align-center justify-center">
      <Loading />
    </div>
  </v-sheet>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import ProductCardListItem from './ProductCardListItem.vue'

import Loading from '~/components/Loading'

export default {
  components: { Loading, ProductCardListItem },

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
.wrap-products {
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-row-gap: 1rem;
  padding-bottom: 1rem;
}
</style>
