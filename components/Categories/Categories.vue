<template>
  <v-row class="d-flex content-layout py-6 ">
    <v-col v-for="n in 5" :key="n" cols="5" class="fb-20">
      <div class="d-flex">
        <div class="circle" :style="style[n - 1]">
          <v-icon class="color-white icon-category">{{ icon[n - 1] }} </v-icon>
        </div>
        <div class="ml-3">
          <h6>{{ name[n - 1] }}</h6>
          <p>{{ description[n - 1] }}</p>
        </div>
      </div>
    </v-col>
  </v-row>
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
        { backgroundColor: '#ffb61b' },
      ],
      icon: ['mdi-car-multiple', 'mdi-microsoft-xbox-controller', 'mdi-hospital-box', 'mdi-fan', 'mdi-shoe-heel'],
      name: ['Veículo', 'Tecnologia', 'Saude', 'Eletrodoméstico', 'Moda'],
      description: ['Diversos veículos', 'Produtos de tecnoloia', 'Produtos de saúde', 'As melhores ofertas ', 'Produtos de moda'],
    };
  },
};
</script>
