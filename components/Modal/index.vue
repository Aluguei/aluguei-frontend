<template>
  <v-dialog v-model="isVisible" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="btn color-white" color="primary" dark v-bind="attrs" v-on="on">
        {{ nameButton }}
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2 class="mt-3 mb-3 mx-auto">
          {{ title }}
        </h2>
      </v-card-title>
      <slot></slot>
      <div class="px-14">
        <v-btn
          class="btn-red mr-4 btn color-white mb-8"
          @click="handleClose(false)"
        >
          Fechar
        </v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

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
      setAnunciarDialogIsVisible: 'dialog/setIsVisible'
    }),
    handleClose(status) {
      this.setAnunciarDialogIsVisible(status);
    },
  },

  data: () => ({
    dialog: true,
  }),
};
</script>
