<template>
  <v-dialog :value="isVisible" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="btn mt-10 color-white" color="primary" dark v-bind="attrs" v-on="on">
        {{ nameButton }}
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2 style="margin-left: auto; margin-right: auto">{{ title }}</h2>
      </v-card-title>
      <slot></slot>
      <!-- <v-card-actions>
        <v-btn color="blue darken-1" text @click="handleClose"> Close </v-btn>
        <v-btn color="blue darken-1" text @click="$emit('onSave')"> Save </v-btn>
      </v-card-actions> -->
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    isVisible: {
      type: Boolean,
      required: true,
    },
    nameButton: {
      type: String,
      required: true,
    },
  },

  methods: {
    ...mapActions({
      setAnunciarDialogIsVisible: "dialog/setIsVisible",
    }),

    handleClose() {
      this.setAnunciarDialogIsVisible();
    },
  },

  data: () => ({
    dialog: true,
  }),
};
</script>
