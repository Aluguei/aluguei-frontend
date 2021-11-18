<template>
  <v-container>
    <v-row>
      <v-col align-self="center" class="pa-5" cols="6">
        <v-row> <v-img :src="product.imageUrl" /> </v-row>
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
    <v-row class="mt-5" align-content="center">
      <v-col class="text-center">
        <h1 style="color: #fe7b37; margin-right: 10px">
          R$ {{ product.price }}
        </h1>
        <h3 style="color: #fe7b37; margin-top: 5px">
          / {{ product.humanTimeUnit }}
        </h3>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4" offset="4">
        <v-btn class="mt-3 btn color-white" @click="handleRentProduct"
          >Alugar</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
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
  data() {
    return {
      path: null,
      owner: [],
      loading: true,
      notFound: false
    }
  },

  methods: {
    ...mapActions({
      getOwnedProducts: 'products/getOwnedProducts',
      setSnackbar: 'snackbars/setSnackbar'
    }),

    setRating(rating) {
      this.rating = rating
    },
    handleRentProduct() {
      const snackbar = {
        timeout: 3000,
        color: 'green',
        text: 'Produto alugado com sucesso!'
      }

      this.setSnackbar(snackbar)
    }
  }
}
</script>
