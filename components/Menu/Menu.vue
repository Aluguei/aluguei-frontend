<template>
  <v-card class="d-flex bg-none bs-none" max-width="400" tile>
    <v-list dense class="bg-none">
      <v-list-item-group color="primary" class="d-flex">
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.link" link>
          <v-list-item-content>
            <v-list-item-title
              class="color-white font-weight-medium fs-small"
              v-text="item.text"
            ></v-list-item-title>
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
      { text: "Home" },
      { text: "Sobre nós", link: "sobre-nos" },
      { text: "Anunciar produto", link: "/anunciar-produto" },
      { text: "Fale Conosco", link: "/fale-conosco" },
    ],
  }),
};
</script>
