<template>
  <Modal :isVisible="isVisible" title="Detalhes do produto" nameButton="Ver">
    <ProductDetailCard :productId="productId" />
  </Modal>
</template>

<script>
import { mapGetters } from 'vuex';
import Modal from '~/components/Modal';
import ProductDetailCard from '~/components/ProductDetailCard';

export default {
  components: {
    ProductDetailCard,
    Modal,
  },
  props: {
    productId: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      isVisible: 'dialog/getIsVisible',
    }),
  },
};
</script>
