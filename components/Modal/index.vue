<template>
  <v-dialog :value="isVisible" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on"> Open Dialog </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">{{ title }}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <slot></slot>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="handleClose"> Close </v-btn>
        <v-btn color="blue darken-1" text @click="$emit('onSave')">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    isVisible: {
      type: Boolean,
      required: true
    }
  },

  methods: {
    ...mapActions({
      setAnunciarDialogIsVisible: 'dialog/setIsVisible'
    }),

    handleClose() {
      this.setAnunciarDialogIsVisible()
    }
  },

  data: () => ({
    dialog: true
  })
}
</script>
