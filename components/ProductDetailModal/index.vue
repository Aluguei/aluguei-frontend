<template>
  <Modal title="Detalhes do produto" nameButton="Sair">
    <ProductDetailCard />
  </Modal>
</template>

<script>
import Modal from "~/components/Modal";
import ProductDetailCard from "~/components/ProductDetailCard";

export default {
  components: {
    ProductDetailCard,
    Modal,
  },
};
</script>
