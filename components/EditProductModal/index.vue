<template>
  <Modal isPersistent :isVisible="isVisible" @closeDialog="closeModal">
    <EditProductForm />
  </Modal>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Modal from '~/components/Modal'
import EditProductForm from '~/components/EditProductForm'

export default {
  components: {
    EditProductForm,
    Modal
  },

  computed: {
    ...mapGetters({
      isVisible: 'formEditProduct/getIsVisible'
    })
  },

  methods: {
    ...mapActions({
      setIsVisible: 'formEditProduct/setIsVisible'
    }),

    closeModal() {
      this.setIsVisible()
    }
  }
}
</script>
