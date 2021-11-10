<template>
  <v-sheet class="rounded ma-8 pa-7">
    <h3 class="mb-6">Lista de Produtos</h3>
    <v-slide-group show-arrows>
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
                <h6 class="color-orange">{{ item.price }}</h6>
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
  </v-sheet>
</template>
<script>
export default {
  data: () => ({
    model: null,
    items: [],
    meta: []
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
        const products = await this.$axios.$get('/api/products/owned', config)

        products.data.map((product) => this.items.push(product))
        products.meta.map((product) => this.items.push(product))

        console.log(response)
        return { response }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
