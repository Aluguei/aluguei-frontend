<template>
  <v-list class="d-flex my-5 justify-space-around">
    <v-list-item
      v-for="n in 5"
      :key="n"
      class="d-flex align-center justify-center"
    >
      <div class="ma-3 pa-4 text-center rounded-circle" :style="style[n - 1]">
        <v-icon class="color-white">{{ icon[n - 1] }} </v-icon>
      </div>
      <div class="d-flex flex-column justify-space-around">
        <h6>{{ name[n - 1] }}</h6>
        <p class="description-category ma-0">{{ description[n - 1] }}</p>
      </div>
    </v-list-item>
  </v-list>
</template>
<script>
export default {
  data() {
    return {
      style: [
        { backgroundColor: '#41cdcf' },
        { backgroundColor: '#f54f9a' },
        { backgroundColor: '#83c847' },
        { backgroundColor: '#51acf6' },
        { backgroundColor: '#ffb61b' }
      ],
      icon: [
        'mdi-car-multiple',
        'mdi-microsoft-xbox-controller',
        'mdi-hospital-box',
        'mdi-fan',
        'mdi-shoe-heel'
      ],
      name: ['Veículo', 'Tecnologia', 'Saude', 'Eletrodoméstico', 'Moda'],
      description: [
        'Diversos veículos',
        'Produtos de tecnoloia',
        'Produtos de saúde',
        'As melhores ofertas ',
        'Produtos de moda'
      ]
    }
  }
}
</script>
