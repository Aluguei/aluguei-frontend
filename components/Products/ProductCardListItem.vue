<template>
  <v-hover v-slot="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="300"
      height="500px"
    >
      <v-img min-width="300" height="250" :src="product.imageUrl" eager>
        <v-expand-transition>
          <div
            v-if="hover"
            class="
              d-flex
              transition-fast-in-fast-out
              bg-blue-medium
              darken-2
              v-card--reveal
              text-h4
              white--text
            "
            style="height: 100%; justify-content: center; align-items: center"
          >
            R${{ product.price }} <br />
            {{ product.humanTimeUnit }}
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text class="pt-6" style="position: relative">
        <v-btn
          class="white--text"
          color="blue"
          absolute
          large
          right
          fab
          top
          @click="openProductDetailsModal"
        >
          <v-icon>mdi-cart</v-icon>
        </v-btn>
        <div class="font-weight-light grey--text text-h6 mb-2">
          {{ product.humanCategory }}
        </div>
        <h3 class="text-h4 font-weight-light blue--text mb-2">
          {{ product.name }}
        </h3>
        <div class="font-weight-light text-h6 mb-2">
          {{ product.description }}
        </div>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },

  methods: {
    ...mapActions({
      setProduct: 'productDetailModal/setProduct',
      setProductDetailModalIsVisible: 'productDetailModal/setIsVisible'
    }),

    openProductDetailsModal() {
      this.setProduct(this.product)
      this.setProductDetailModalIsVisible(true)
    }
  }
}
</script>

<style>
.card {
  cursor: pointer;
}

.noImage {
  background: gray;
}
</style>
