<template>
  <v-card class="d-flex bs-none bg-white rounded ma-8 pa-7" tile>
    <v-list dense class="bg-none bs-none pa-0">
      <h4 class="mb-6">Lista de Produtos (Owned)</h4>
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
  // async asyncData() {
  //   const config = {
  //     headers: {
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTYwOCwiaWF0IjoxNjMzNTc4NjY1LCJleHAiOjE2MzM1ODIyNjV9.D70AcIJrgfyhD6x94uwMwFYyZQ5IIME_k7n_-EopAWk",
  //       device: "mobile",
  //     },
  //   };

  //   try {
  //     await this.$axios.$get("/products/owned", {}, config).then((res) => {
  //       console.log(res);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
  data() {
    return {
      items: ["121"],
    };
  },
};
</script>
