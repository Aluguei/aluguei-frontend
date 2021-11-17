<template>
  <v-sheet class="rounded ma-8">
    <ProductDetailModal />
    <v-row v-if="true">
      <v-col v-for="(item, i) in ownedProducts" :key="i">
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
      isOwnedProductsLoading: 'products/getIsOwnedProductsLoading',
      ownedProducts: 'products/getOwnedProducts'
    })
  },

  mounted() {
    this.getOwnedProducts()
  },

  methods: {
    ...mapActions({
      getOwnedProducts: 'products/getOwnedProducts'
    })
  }
}
</script>
