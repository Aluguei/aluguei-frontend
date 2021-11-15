<template>
  <v-app class="bg-gray">
    <v-card class="bs-none py-5 bg-gray mx-10">
      {{ path }}
    </v-card>
    <div v-if="!loading" class="product-details mx-10">
      <div v-if="!notFound" class="d-flex">
        <div class="fb-50">
          <img src="~/assets/img/products/guitar/guitar-01-1.webp" />
        </div>
        <div class="fb-50">
          <!-- Produto -->
          <h3 class="font-weight-bold color-black">{{ product.name }}</h3>
          <h6 class="color-gray">{{ product.category }}</h6>
          <h4 class="color-orange mb-4">{{ product.price }}</h4>
          <h4 class="font-weight-bold color-black">Descrição</h4>
          <p class="mb-5">{{ product.description }}</p>
          <h4 class="font-weight-bold color-black">Quantidade</h4>
          <p class="mb-5">{{ product.timeQuantity }}</p>

          <!-- Anunciante -->
          <div v-if="product.owner">
            <h4 class="font-weight-bold color-black mb-2">Anunciante</h4>
            <p>
              <span class="font-weight-bold color-black mb-1">Nome: </span>
              {{ product.owner.fullName }}
            </p>
            <p>
              <span class="font-weight-bold color-black mb-1">Estado: </span
              >{{ product.owner.state }}
            </p>
            <p>
              <span class="font-weight-bold color-black mb-1">Cidade: </span
              >{{ product.owner.city }}
            </p>
          </div>
          <v-btn class="mr-4 btn mt-10 color-white">Alugar</v-btn>
        </div>
      </div>
      <div v-else>
        <h3>Produto não encontrado.</h3>
      </div>
    </div>
    <div v-else class="mx-10">
      <h4 class="text-center">Carregando o produto...</h4>
      <div class="text-center mt-3">
        <img src="~/assets/img/logo/loading-logo.gif" />
      </div>
    </div>
  </v-app>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      path: null,
      product: [],
      owner: [],
      loading: true,
      notFound: false
    }
  },
  mounted() {
    this.listDetailsProduct()
  },
  methods: {
    setRating(rating) {
      this.rating = rating
    },
    async listDetailsProduct() {
      try {
        const config = {
          headers: {
            device: 'mobile'
          }
        }

        this.product = await this.$axios
          .$get(`/api/products/${this.id}`, config)
          .finally(() => {
            this.loading = false
          })
      } catch (error) {
        this.notFound = true
        console.log(error)
      }
    }
  }
}
</script>
