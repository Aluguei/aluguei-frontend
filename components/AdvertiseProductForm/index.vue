<template>
  <div class="px-14">
    <v-form
      @submit.prevent="
        submitForm({
          name,
          description,
          price,
          category,
          timeUnit,
          timeQuantity,
        })
      "
    >
      <v-row>
        <v-col cols="12" sm="6" md="6">
          <v-text-field v-model="name" label="Nome" />
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-text-field v-model="description" label="Descrição" />
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-select
            v-model="category"
            item-value="value"
            item-text="label"
            :items="itemsCategory"
            label="Categoria"
          />
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-text-field v-model="price" label="Valor" />
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-text-field v-model="timeQuantity" label="Tempo" />
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-select
            v-model="timeUnit"
            item-value="value"
            item-text="label"
            :items="itemsTimeUnit"
            label="Por"
          />
        </v-col>
      </v-row>
      <v-btn class="btn mt-7 mb-4" type="submit">Anunciar</v-btn>
    </v-form>
  </div>
</template>
<script>
import { mask } from 'vue-the-mask';
import { mapActions, mapGetters } from 'vuex';

export default {
  directives: { mask },
  computed: {
    ...mapGetters({
      isOwnedProductsLoading: 'products/getIsOwnedProductsLoading',
    }),
    name: {
      get() {
        return this.$store.state.formProductAdvertise.name;
      },
      set(value) {
        this.$store.commit('formProductAdvertise/updateName', value);
      },
    },
    description: {
      get() {
        return this.$store.state.formProductAdvertise.description;
      },
      set(value) {
        this.$store.commit('formProductAdvertise/updateDescription', value);
      },
    },
    price: {
      get() {
        return this.$store.state.formProductAdvertise.price;
      },
      set(value) {
        this.$store.commit('formProductAdvertise/updatePrice', value);
      },
    },
    category: {
      get() {
        return this.$store.state.formProductAdvertise.category;
      },
      set(value) {
        this.$store.commit('formProductAdvertise/updateCategory', value);
      },
    },
    timeUnit: {
      get() {
        return this.$store.state.formProductAdvertise.timeUnit;
      },
      set(value) {
        this.$store.commit('formProductAdvertise/updateTimeUnit', value);
      },
    },
    timeQuantity: {
      get() {
        return this.$store.state.formProductAdvertise.timeQuantity;
      },
      set(value) {
        this.$store.commit('formProductAdvertise/updateTimeQuantity', value);
      },
    },
    itemsTimeUnit: {
      get() {
        return this.$store.state.formProductAdvertise.itemsTimeUnit;
      },
    },
    itemsCategory: {
      get() {
        return this.$store.state.formProductAdvertise.itemsCategory;
      },
    },
    money: {
      get() {
        return this.$store.state.formProductAdvertise.money;
      },
    },
  },

  async mounted() {
    this.products = await this.getOwnedProducts();
  },

  methods: {
    ...mapActions({
      getOwnedProducts: 'products/getOwnedProducts',
      setProduct: 'formProductAdvertise/setProduct',
    }),

    submitForm(form) {
      this.setProduct(form);
    },
  },
};
</script>
