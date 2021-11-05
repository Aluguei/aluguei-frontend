<template>
  <div class="search bg-white">
    <v-form class="d-flex" @submit.prevent="submitForm(search)">
      <v-autocomplete
        v-model="select"
        append-icon=""
        :loading="loading"
        :items="items"
        :search-input.sync="search"
        cache-items
        class="mx-4"
        flat
        hide-no-data
        hide-details
        label="Buscar produtos, marcas e muito mais..."
        solo
      ></v-autocomplete>
      <v-btn class="bg-blue-medium px-7 py-1 ma-1 rounded-xl height-auto" type="submit">
        <h6><v-icon class="color-white">mdi-magnify</v-icon></h6>
      </v-btn>
    </v-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      items: [],
      ids: [],
      search: null,
      select: null,
      products: [],
    };
  },
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    },
  },
  mounted() {
    this.listProdutcts();
  },
  methods: {
    querySelections(v) {
      this.loading = true;
      setTimeout(() => {
        this.items = this.products.filter((e) => {
          return (e || "").toLowerCase().includes((v || "").toLowerCase());
        });
        this.loading = false;
      }, 500);
    },
    async listProdutcts() {
      try {
        const config = {
          headers: {
            device: "mobile",
          },
        };
        const products = await this.$axios.$get("/api/products/available", config);
        products.data.map((product) => this.items.push(product.name));
        products.data.map((product) => this.ids.push(product.id));

        console.log(products);
        return { products };
      } catch (error) {
        console.log(error);
      }
    },
    submitForm(productName) {
      let productId;
      this.items.forEach((element, index) => {
        if (element === productName) {
          productId = this.ids[index];
        }
      });
      this.$router.push(`/detalhes-produto/${productId}`);
    },
  },
};
</script>
