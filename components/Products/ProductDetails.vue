<template>
  <v-app class="bg-gray">
    <v-card class="bs-none py-5 bg-gray mx-10">
      {{ path }}
    </v-card>
    <div class="product-details mx-10">
      <div class="d-flex">
        <div class="fb-50">
          <img src="~/assets/img/products/guitar/guitar-01-1.webp" />
        </div>
        <div class="fb-50">
          <h3 class="font-weight-bold color-black">{{ name }}</h3>
          <h6 class="color-gray">{{ category }}</h6>
          <h4 class="color-orange mb-4">{{ price }}</h4>
          <h4 class="font-weight-bold color-black">Descrição</h4>
          <p class="mb-5">{{ description }}</p>
          <h4 class="font-weight-bold color-black">Anunciante</h4>
          <p class="mb-1"><span class="font-weight-bold color-black">Nome: </span> {{ advertiser.name }}</p>
          <p class="mb-1"><span class="font-weight-bold color-black">Estado: </span>{{ advertiser.state }}</p>
          <p class="mb-1"><span class="font-weight-bold color-black">Cidade: </span>{{ advertiser.city }}</p>
          <v-btn class="mr-4 btn">Alugar</v-btn>
        </div>
      </div>
    </div>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      path: 'Home >  Produtos >  Instrumentos Musicais > Guitarra Telecaster',
      name: 'TeleCaster Preta',
      rating: 0,
      category: 'Instrumento Musical',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
      price: '$89/hour',
      advertiser: {
        name: 'Gabriel Alonso',
        state: 'São Paulo',
        city: 'Campinas',
      },
    };
  },
  methods: {
    setRating(rating) {
      this.rating = rating;
    },
  },
};
</script>
