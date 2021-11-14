<template>
  <v-list class="d-flex my-5 justify-space-around">
    <v-list-item
      v-for="(item, idx) in categories"
      :key="idx"
      :style="item.isActive ? {} : { opacity: 0.6 }"
      class="d-flex align-center justify-center listItem"
    >
      <v-btn
        :color="item.color"
        class="white--text ma-3 pa-4"
        fab
        @click="handleCategoryClick(item.category)"
      >
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>

      <div class="d-flex flex-column justify-space-around">
        <h6>{{ item.name }}</h6>
        <p class="description-category ma-0">{{ item.description }}</p>
      </div>
    </v-list-item>
  </v-list>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      categories: 'categories/getCategories'
    })
  },

  methods: {
    ...mapActions({
      getAvailableProducts: 'products/getAvailableProducts',
      setProductsSearch: 'products/setProductsSearch'
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
