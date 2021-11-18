<template>
  <div>
    <v-snackbar
      v-for="(snackbar, index) in snackbars"
      :key="snackbar.text + Math.random()"
      :value="snackbar.showing"
      :timeout="snackbar.timeout"
      :color="snackbar.color"
      :style="`bottom: ${index * 80 + 15}px`"
      @input="handleInput(index)"
      right
    >
      <span> {{ snackbar.text }} {{ index }} </span>

      <template v-slot:action="{ attrs }">
        <v-btn v-bind="attrs" text @click="handleInput(index)"> Fechar </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      snackbars: 'snackbars/getSnackbars'
    })
  },

  methods: {
    ...mapActions({
      getOwnedProducts: 'products/getOwnedProducts',
      setSnackbars: 'snackbars/setSnackbars'
    }),

    handleInput(index) {
      // TODO - Remover o que o cara realmente clicou
      this.setSnackbars(this.snackbars.filter((_, idx) => idx !== index))
    }
  }
}
</script>
