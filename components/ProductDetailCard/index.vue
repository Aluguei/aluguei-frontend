<template>
  <v-container>
    <v-row>
      <v-col class="text-center">
        <h2 style="color: black">{{ product.name }}</h2>
        <h5 style="font-weight: bold">{{ product.humanCategory }}</h5>
      </v-col>
    </v-row>
    <v-row>
      <v-col align-self="center" class="pa-5" cols="6">
        <v-row>
          <v-img :src="product.imageUrl" />
        </v-row>
      </v-col>
      <v-col
        class="pa-5"
        cols="6"
        style="
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        "
      >
        <div>
          <h4 class="mb-3 font-weight-bold color-black text-center">
            Descrição
          </h4>
          <p>
            {{ product.description }}
          </p>
        </div>

        <div>
          <h4 class="mb-3 font-weight-bold color-black text-center">
            Anunciante
          </h4>
          <p>
            <span class="font-weight-bold color-black">Nome: </span>
            {{ product.owner.fullName }}
          </p>
          <p>
            <span class="font-weight-bold color-black">Estado: </span
            >{{ product.owner.state }}
          </p>
          <p>
            <span class="font-weight-bold color-black">Cidade: </span
            >{{ product.owner.city }}
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row class="mt-7">
      <v-col class="text-center">
        <h1 style="color: #fe7b37; margin-right: 10px">
          R$ {{ product.price }} / {{ product.humanTimeUnit }}
        </h1>
      </v-col>
    </v-row>
    <v-row align-content="center">
      <v-col cols="4" offset-lg="4">
        <v-btn
          :loading="loading"
          :disabled="loading"
          class="btn color-white"
          @click="handleRentProduct"
        >
          Alugar
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapActions } from 'vuex'

import api from '~/plugins/api'

export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      loading: false
    }
  },

  methods: {
    ...mapActions({
      getOwnedProducts: 'products/getOwnedProducts',
      setSnackbar: 'snackbars/setSnackbar',
      rentProduct: 'products/rentProduct'
    }),

    setRating(rating) {
      this.rating = rating
    },

    handleRentProduct() {
      Object.assign(this, { loading: true })

      this.rentProduct(this.product.id)
        .catch((err) => {
          console.error(err)
        })
        .finally(() => {
          Object.assign(this, { loading: false })
        })
    }
  }
}
</script>
