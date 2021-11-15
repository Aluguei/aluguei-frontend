<template>
  <v-hover v-slot="{ hover }">
    <v-card class="mx-auto" color="grey lighten-4" max-width="300">
      <v-img min-width="300" height="250" :src="product.imageUrl" eager>
        <v-expand-transition>
          <div
            v-if="hover"
            class="
              d-flex
              transition-fast-in-fast-out
              bg-blue-medium
              darken-2
              v-card--reveal
              text-h4
              white--text
            "
            style="height: 100%; justify-content: center; align-items: center"
          >
            R${{ product.price }} <br />
            {{ product.humanTimeUnit }}
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text class="pt-6" style="position: relative">
        <v-btn absolute color="blue" class="white--text" fab large right top>
          <v-icon>mdi-cart</v-icon>
        </v-btn>
        <div class="font-weight-light grey--text text-h6 mb-2">
          {{ product.humanCategory }}
        </div>
        <h3 class="text-h4 font-weight-light blue--text mb-2">
          {{ product.name }}
        </h3>
        <div class="font-weight-light text-h6 mb-2">
          {{ product.description }}
        </div>
      </v-card-text>
    </v-card>
  </v-hover>

  <!-- <v-hover>
    <v-card elevation="10" class="mx-auto card" max-width="300">
      <v-img
        class="noImage"

        
      ></v-img>

      <v-card-title class="text-center">{{ product.name }}</v-card-title>

      <v-card-text>
        <v-row align="center" justify="center">
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
          ></v-rating>
        </v-row>
        <div class="mt-4 text-subtitle-1 text-center">
          R$ {{ product.price }}
        </div>
        <div class="mb-2 text-subtitle-1 text-center">{{ product.price }}</div>

        <v-row>
          <v-col>
            <div>
              {{ product.description }}
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-hover> -->
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.card {
  cursor: pointer;
}

.noImage {
  background: gray;
}
</style>
