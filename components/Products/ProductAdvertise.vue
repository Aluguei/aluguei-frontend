<template>
  <div class="d-flex align-center justify-center">
    <div class="content-box">
      <h2>Anunciar Produto</h2>
      <v-form @submit.prevent="submitForm(productInfo)">
        <v-text-field v-model="productInfo.name" label="Nome"></v-text-field>
        <v-text-field v-model="productInfo.description" label="Descrição"></v-text-field>
        <v-text-field v-model="productInfo.price" label="Preço"></v-text-field>
        <v-text-field v-model="productInfo.category" label="Categoria"></v-text-field>
        <v-combobox
          v-model="productInfo.timeUnit"
          clearable
          hide-selected
          persistent-hint
          :items="items"
        ></v-combobox>
        <v-text-field v-model="productInfo.timeQuantity" label="Valor"></v-text-field>
        <v-btn class="mr-4 btn mt-10 color-white" type="submit"> Anunciar </v-btn>
      </v-form>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    productInfo: {
      name: null,
      description: null,
      price: null,
      category: null,
      timeUnit: null,
      timeQuantity: null,
    },
    // items: ["Por Hora", "Por Dia", "Por Semana"],
    items: [1, 2, 3],
  }),
  methods: {
    async submitForm(formInfo) {
      alert(JSON.stringify(formInfo));
      try {
        const config = {
          headers: {
            device: "mobile",
          },
        };

        const response = await this.$axios.$post(
          "/api/products",
          {
            name: formInfo.name,
            description: formInfo.description,
            category: formInfo.category,
            price: formInfo.price,
            timeUnit: formInfo.timeUnit,
            timeQuantity: formInfo.timeQuantity,
          },
          config
        );

        console.log(response);
        return { response };
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
