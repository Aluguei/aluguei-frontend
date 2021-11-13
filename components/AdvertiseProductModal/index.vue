<template>
  <Modal title="Anunciar produto" nameButton="Anunciar">
    <AdvertiseProductForm />
  </Modal>
</template>

<script>
import Modal from "~/components/Modal";
import AdvertiseProductForm from "~/components/AdvertiseProductForm";

export default {
  components: {
    AdvertiseProductForm,
    Modal,
  },
};
</script>
