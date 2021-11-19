<template>
  <Modal isPersistent :isVisible="isVisible" @closeDialog="closeModal">
    <AdvertiseProductForm />
  </Modal>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Modal from '~/components/Modal'
import AdvertiseProductForm from '~/components/AdvertiseProductForm'

export default {
  components: {
    AdvertiseProductForm,
    Modal
  },

  computed: {
    ...mapGetters({
      isVisible: 'formProductAdvertise/getIsVisible'
    })
  },

  methods: {
    ...mapActions({
      setIsVisible: 'formProductAdvertise/setIsVisible'
    }),

    closeModal() {
      this.setIsVisible()
    }
  }
}
</script>
