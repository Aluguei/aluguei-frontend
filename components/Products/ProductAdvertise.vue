<template>
  <div class="d-flex align-center justify-center">
    <div class="content-box">
      <h2>Anunciar Produto</h2>
      <v-form @submit.prevent="submitForm(productInfo)">
        <v-text-field v-model="productInfo.name" label="Nome" />
        <v-text-field v-model="productInfo.description" label="Descrição" />
        <v-text-field v-model="productInfo.category" label="Categoria" />
        <v-text-field v-model="productInfo.price" label="Valor" />
        <v-text-field v-model="productInfo.timeQuantity" label="Tempo" />
        <v-select
          v-model="productInfo.timeUnit"
          item-value="value"
          item-text="label"
          :items="items"
          label="Por"
        />
        <v-btn class="mr-4 btn mt-10 color-white" type="submit">Anunciar</v-btn>
      </v-form>
    </div>
  </div>
</template>
<script>
import { mask } from 'vue-the-mask'
export default {
  directives: { mask },
  data: () => ({
    productInfo: {
      name: null,
      description: null,
      price: null,
      category: null,
      timeUnit: null,
      timeQuantity: null
    },
    items: [
      { label: 'Hora', value: 'hourly' },
      { label: 'Dia', value: 'daily' },
      { label: 'Semana', value: 'weekly' }
    ]
  }),
  methods: {
    async submitForm(formInfo) {
      const config = {
        headers: {
          device: 'mobile'
        }
      }

      const response = await this.$axios.$post(
        '/api/products',
        {
          name: formInfo.name,
          description: formInfo.description,
          category: formInfo.category,
          price: parseInt(formInfo.price),
          timeUnit: formInfo.timeUnit,
          timeQuantity: parseInt(formInfo.timeQuantity)
        },
        config
      )
      return { response }
    }
  }
}
</script>
