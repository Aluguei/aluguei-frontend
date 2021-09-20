<template>
  <div class="search bg-white d-flex">
    <v-autocomplete
      v-model="select"
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

    <v-btn class="color-white bg-blue-medium b-blue-medium px-7 py-1 ma-1 rounded-xl height-auto" type="submit">
      <v-btn icon>
        <h6><v-icon class="color-white">mdi-magnify</v-icon></h6>
      </v-btn>
    </v-btn>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      items: [],
      search: null,
      select: null,
      products: [
        'Moto',
        'Carro',
        'Guitarra',
        'Bateria',
        'Mesa',
        'Cadeira',
        'Ventilador',
        'Mouse',
        'Teclado',
        'Caminhão',
        'Armário',
        'Livro',
        'Tapete',
        'Cortina',
        'Lápis',
        'Caneta',
        'Régua',
        'Porta',
        'Celular',
        'Notbook',
        'Ar Condicionado',
        'Garrafa',
      ],
    };
  },
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    },
  },
  methods: {
    querySelections(v) {
      this.loading = true;
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.products.filter((e) => {
          return (e || '').toLowerCase().includes((v || '').toLowerCase());
        });
        this.loading = false;
      }, 500);
    },
  },
};
</script>
