<template>
  <div class="pa-7 align-center justify-center">
    <v-form @submit.prevent="submitForm(productInfo)">
      <v-text-field v-model="productInfo.name" label="Nome" />
      <v-text-field v-model="productInfo.description" label="Descrição" />
      <v-select
        v-model="productInfo.category"
        item-value="value"
        item-text="label"
        :items="itemsCetegory"
        label="Categoria"
      />
      <v-text-field v-model="productInfo.price" label="Valor" />
      <v-text-field v-model="productInfo.timeQuantity" label="Tempo" />
      <v-select
        v-model="productInfo.timeUnit"
        item-value="value"
        item-text="label"
        :items="itemsTimeUnit"
        label="Por"
      />
      <v-btn class="mr-4 btn mt-10 color-white" type="submit">Anunciar</v-btn>
    </v-form>
  </div>
</template>
<script>
import { mask } from "vue-the-mask";
import { mapActions, mapGetters } from "vuex";

export default {
  directives: { mask },
  data: () => ({
    productInfo: {
      name: null,
      description: null,
      price: null,
      category: null,
      timeUnit: null,
      timeQuantity: null,
    },
    itemsTimeUnit: [
      { label: "Hora", value: "hourly" },
      { label: "Dia", value: "daily" },
      { label: "Semana", value: "weekly" },
    ],
    itemsCetegory: [
      { label: "Veiculos", value: "vehicle" },
      { label: "Tecnologia", value: "technology" },
      { label: "Ferramenta", value: "tools" },
      { label: "Esportes", value: "sports" },
      { label: "Moda", value: "fashion" },
    ],
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
