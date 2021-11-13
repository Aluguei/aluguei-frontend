<template>
  <v-sheet class="rounded ma-8">
    <h3 class="pa-7">Lista de Produtos</h3>
    <v-slide-group v-if="!loading" show-arrows>
      <v-slide-item v-for="(item, i) in items" :key="i">
        <v-list>
          <v-list-item-group>
            <v-list-item>
              <v-list-item-content>
                <div class="text-center">
                  <img src="@/assets/img/products/guitar/guitar-01-1.jpg" />
                </div>
                <p class="fs-small mb-2">{{ item.category }}</p>
                <h4 class="mb-3">{{ item.name }}</h4>
                <h6 class="color-orange">R${{ item.price }}</h6>
                <a :href="`/detalhes-produto/${item.id}`">
                  <v-btn class="mr-4 btn mt-10 color-white" type="button">
                    Alugar
                  </v-btn>
                </a>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-slide-item>
    </v-slide-group>
    <div v-else-if="loading" class="d-flex align-center justify-center">
      <div style="text-align: center">
        <h4 class="color-gray mb-3">Carregando os produtos...</h4>
        <img src="@/assets/img/logo/loading-logo.gif" />
      </div>
    </div>
  </v-sheet>
</template>
<script>
/* eslint-disable vue/no-unused-components */
import Loading from '../Loading/Loading.vue'
export default {
  components: { Loading },
  data: () => ({
    model: null,
    items: [],
    meta: [],
    loading: true
  }),
  mounted() {
    this.listProdutcts()
  },
  methods: {
    async listProdutcts() {
      try {
        const config = {
          headers: {
            device: 'mobile'
          }
        }
        const products = await this.$axios
          .$get('/api/products/available', config)
          .finally(() => {
            this.loading = false
          })

        products.data.map((product) => this.items.push(product))
        // products.meta.map((product) => this.items.push(product));

        // console.log(products);
        return { products }
      } catch (error) {
        // console.log(error);
      }
    }
  }
}
</script>
