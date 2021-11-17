<template>
  <Modal :isVisible="isVisible" title="Anunciar produto" nameButton="Anunciar">
    <AdvertiseProductForm />
  </Modal>
</template>

<script>
import { mapGetters } from "vuex";
import Modal from "~/components/Modal";
import AdvertiseProductForm from "~/components/AdvertiseProductForm";

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
