<template>
  <v-card class="d-flex bg-none bs-none" max-width="400" tile>
    <v-list dense class="bg-none">
      <v-list-item-group color="primary" class="d-flex">
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.link" link>
          <v-list-item-content>
            <v-list-item-title
              :style="
                item.isActive
                  ? {
                      'border-bottom': '1px solid white',
                      'padding-bottom': '3px'
                    }
                  : {}
              "
              class="color-white font-weight-medium fs-small"
              v-text="item.text"
              @click="handleClick(item)"
            />
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      items: 'navbarItems/getItems'
    })
  },

  methods: {
    ...mapActions({
      setCurrentItem: 'navbarItems/setCurrentItem'
    }),

    handleClick(item) {
      this.setCurrentItem(item.link)
    }
  }
}
</script>
