<template>
  <div class="px-14 align-center justify-center">
    <v-form @submit.prevent="submitForm(productInfo)">
      <v-row>
        <v-col cols="12" sm="6" md="6">
          <v-text-field v-model="productInfo.name" label="Nome" />
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-text-field v-model="productInfo.description" label="Descrição" />
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-select
            v-model="productInfo.category"
            item-value="value"
            item-text="label"
            :items="itemsCetegory"
            label="Categoria"
          />
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-text-field v-model="productInfo.price" label="Valor" v-money="money" />
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-text-field v-model="productInfo.timeQuantity" label="Tempo" />
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-select
            v-model="productInfo.timeUnit"
            item-value="value"
            item-text="label"
            :items="itemsTimeUnit"
            label="Por"
          />
        </v-col>
      </v-row>
      <v-btn class="mr-4 btn mt-10 color-white mb-4" type="submit">Anunciar</v-btn>
    </v-form>
  </div>
</template>
<script>
import { mask } from 'vue-the-mask';
import { mapActions, mapGetters } from 'vuex';
import { Money } from 'v-money';

export default {
  directives: { mask, Money },
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
      { label: 'Hora', value: 'hourly' },
      { label: 'Dia', value: 'daily' },
      { label: 'Semana', value: 'weekly' },
    ],
    itemsCetegory: [
      { label: 'Veiculos', value: 'vehicle' },
      { label: 'Tecnologia', value: 'technology' },
      { label: 'Ferramenta', value: 'tools' },
      { label: 'Esportes', value: 'sports' },
      { label: 'Moda', value: 'fashion' },
    ],
    money: {
      decimal: ',',
      thousands: '.',
      prefix: 'R$ ',
      suffix: ' #',
      precision: 2,
      masked: false,
    },
  }),

  computed: {
    ...mapGetters({
      isOwnedProductsLoading: 'products/getIsOwnedProductsLoading',
    }),
  },

  async mounted() {
    this.products = await this.getOwnedProducts();
  },

  methods: {
    ...mapActions({
      getOwnedProducts: 'products/getOwnedProducts',
    }),
  },
};
</script>
