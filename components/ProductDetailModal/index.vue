<template>
  <Modal :isPersistent="true" :isVisible="isVisible" @closeDialog="closeModal">
    <ProductDetailCard :product="product" />
  </Modal>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Modal from '~/components/Modal'
import ProductDetailCard from '~/components/ProductDetailCard'

export default {
  components: {
    ProductDetailCard,
    Modal
  },

  computed: {
    ...mapGetters({
      isVisible: 'productDetailModal/getIsVisible',
      product: 'productDetailModal/getProduct'
    })
  },

  methods: {
    ...mapActions({
      setIsVisible: 'productDetailModal/setIsVisible'
    }),

    closeModal() {
      this.setIsVisible()
    }
  }
}
</script>
