<template>
  <v-sheet class="rounded ma-8">
    <v-slide-group v-if="!isOwnedProductsLoading" show-arrows>
      <v-slide-item v-for="(item, i) in products" :key="i">
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
                  <v-btn class="mr-4 btn mt-10 color-white" type="button"> Alugar </v-btn>
                </a>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-slide-item>
    </v-slide-group>
    <div v-else-if="isOwnedProductsLoading" class="d-flex align-center justify-center">
      <div style="text-align: center">
        <h4 class="color-gray mb-3">Carregando os produtos...</h4>
        <img src="@/assets/img/logo/loading-logo.gif" />
      </div>
    </div>
  </v-sheet>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data: () => ({
    products: [],
  }),

  computed: {
    ...mapGetters({
      isOwnedProductsLoading: "products/getIsOwnedProductsLoading",
    }),
  },

  async mounted() {
    this.products = await this.getOwnedProducts();
  },

  methods: {
    ...mapActions({
      getOwnedProducts: "products/getOwnedProducts",
    }),
  },
};
</script>
