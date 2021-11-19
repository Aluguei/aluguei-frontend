<template>
  <v-sheet class="rounded ma-8">
    <AdvertiseProductModal />
    <EditProductModal />
    <div class="d-flex">
      <div class="fb-80">
        <h3 class="pa-7">Sua Lista de Produtos</h3>
      </div>
      <div class="fb-20 mr-4">
        <v-btn class="btn mt-7 mb-7" type="button" @click="openFormModal"
          >Anunciar Produto</v-btn
        >
      </div>
    </div>
    <v-row v-if="true">
      <v-col v-for="(item, i) in ownedProducts" :key="i">
        <ProductCardListItem
          :product="item"
          @click="handleClick"
          buttonIcon="mdi-pencil"
        />
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

import AdvertiseProductModal from '~/components/AdvertiseProductModal'

import Loading from '~/components/Loading'

export default {
  components: { Loading, ProductCardListItem, AdvertiseProductModal },

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
      getOwnedProducts: 'products/getOwnedProducts',
      setFormProductAdvertiseIsVisible: 'formProductAdvertise/setIsVisible',
      setFormEditProductIsVisible: 'formEditProduct/setIsVisible'
    }),
    handleClick(product) {
      // seta o produto para editar na store
      // abre o modal
      this.setFormEditProductIsVisible()
      // alert(JSON.stringify(product))
    },

    openFormModal() {
      this.setFormProductAdvertiseIsVisible()
    }
  }
}
</script>
