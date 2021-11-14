<template>
  <Modal :isVisible="isVisible" title="Anunciar produto" nameButton="Anunciar">
    <AdvertiseProductForm />
  </Modal>
</template>

<script>
import Modal from "~/components/Modal";
import AdvertiseProductForm from "~/components/AdvertiseProductForm";
import { mapGetters } from "vuex";

export default {
  components: {
    AdvertiseProductForm,
    Modal,
  },
  computed: {
    ...mapGetters({
      isVisible: "dialog/getIsVisible",
    }),
  },
};
</script>
