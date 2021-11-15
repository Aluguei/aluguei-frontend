<template>
  <v-sheet class="rounded">
    <v-slide-group v-if="!isOwnedProductsLoading" show-arrows>
      <v-slide-item v-for="(item, i) in products" :key="i">
        <v-list max-width="300">
          <v-list-item-group>
            <v-list-item>
              <v-list-item-content>
                <v-img
                  min-width="300"
                  height="250"
                  :src="item.imageUrl"
                  eager
                />
                <p class="fs-small mb-2">{{ item.category }}</p>
                <h4 class="mb-3">{{ item.name }}</h4>
                <h6 class="color-orange">R${{ item.price }}</h6>
                <a :href="`/detalhes-produto/${item.id}`">
                  <v-btn class="mr-4 btn mt-10" type="button"> Acessar </v-btn>
                </a>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-slide-item>
    </v-slide-group>
    <div
      v-else-if="isOwnedProductsLoading"
      class="d-flex align-center justify-center"
    >
      <div style="text-align: center">
        <h4 class="color-gray mb-3">Carregando os produtos...</h4>
        <img src="@/assets/img/logo/loading-logo.gif" />
      </div>
    </div>
  </v-sheet>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data: () => ({
    products: [],
  }),

  computed: {
    ...mapGetters({
      isOwnedProductsLoading: 'products/getIsOwnedProductsLoading',
      ownedProducts: 'products/getOwnedProducts',
    }),
  },

  async mounted() {
    const products = await this.getOwnedProducts().then((result) => {
      this.products = result;
    });
  },

  methods: {
    ...mapActions({
      getOwnedProducts: 'products/getOwnedProducts',
    }),
  },
};
</script>
