<template>
  <v-card class="d-flex bs-none bg-white rounded ma-8 pa-7" tile>
    <v-list dense class="bg-none bs-none">
      <v-list-item-group color="primary" class="d-flex">
        <v-list-item v-for="(item, i) in items" :key="i" class="col-product">
          <v-list-item-content>
            <div class="text-center">
              <img :src="item.img" class="text-center w-50" />
            </div>
            <p class="fs-small mb-2">{{ item.category }}</p>
            <h4 class="mb-3">{{ item.name }}</h4>
            <h6 class="color-orange">{{ item.value }}</h6>
            <v-btn class="mr-4 btn mt-10 color-white" type="button"> Alugar </v-btn>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    // selectedItem: 1,
    items: [
      { name: 'Telecaster', value: '$89/hour', img: '/_nuxt/assets/img/products/guitar/guitar-01-1.webp', category: 'Instrumento Musical' },
      { name: 'Telecaster', value: '$89/hour', img: '/_nuxt/assets/img/products/guitar/guitar-01-1.webp', category: 'Instrumento Musical' },
      { name: 'Telecaster', value: '$89/hour', img: '/_nuxt/assets/img/products/guitar/guitar-01-1.webp', category: 'Instrumento Musical' },
      { name: 'Telecaster', value: '$89/hour', img: '/_nuxt/assets/img/products/guitar/guitar-01-1.webp', category: 'Instrumento Musical' },
    ],
  }),
};
</script>
