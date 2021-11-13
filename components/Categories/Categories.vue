<template>
  <v-list class="d-flex my-5 justify-space-around">
    <v-list-item
      v-for="(item, idx) in items"
      :key="idx"
      class="d-flex align-center justify-center listItem"
    >
      <div
        class="ma-3 pa-4 text-center rounded-circle"
        :style="item.style"
        @click="handleCategoryClick(item.category)"
      >
        <v-icon class="color-white">{{ item.icon }} </v-icon>
      </div>
      <div class="d-flex flex-column justify-space-around">
        <h6>{{ item.name }}</h6>
        <p class="description-category ma-0">{{ item.description }}</p>
      </div>
    </v-list-item>
  </v-list>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      items: [
        {
          style: { backgroundColor: '#41cdcf', cursor: 'pointer' },
          icon: 'mdi-car-multiple',
          name: 'Veículo',
          description: 'Diversos veículos',
          category: 'vehicle'
        },

        {
          style: { backgroundColor: '#f54f9a', cursor: 'pointer' },
          icon: 'mdi-microsoft-xbox-controller',
          name: 'Tecnologia',
          description: 'Produtos de tecnoloia',
          category: 'technology'
        },

        {
          style: { backgroundColor: '#83c847', cursor: 'pointer' },
          icon: 'mdi-hammer-screwdriver',
          name: 'Ferramenta',
          description: 'Ferramentas no geral',
          category: 'tools'
        },

        {
          style: { backgroundColor: '#51acf6', cursor: 'pointer' },
          icon: 'mdi-basketball',
          name: 'Esportes',
          description: 'Artigos esportivos',
          category: 'sports'
        },

        {
          style: { backgroundColor: '#ffb61b', cursor: 'pointer' },
          icon: 'mdi-shoe-heel',
          name: 'Moda',
          description: 'Produtos de moda',
          category: 'fashion'
        }
      ]
    }
  },

  methods: {
    ...mapActions({
      setProductsSearch: 'products/setProductsSearch',
      getAvailableProducts: 'products/getAvailableProducts'
    }),

    handleCategoryClick(category) {
      this.setProductsSearch({ category })

      if (this.$route.path.includes('/produtos')) this.getAvailableProducts()
      else
        this.$router.push({
          name: 'productsList'
        })
    }
  }
}
</script>
