<template>
  <v-dialog
    class="rounded-xl"
    :value="isVisible"
    :persistent="isPersistent"
    max-width="800"
  >
    <v-card class="rounded-xl">
      <div
        style="
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          padding: 20px 20px 0 20px;
        "
      >
        <v-btn @click="handleClose" icon dark>
          <v-icon size="40px" color="#1B6DC1">mdi-close</v-icon>
        </v-btn>
      </div>

      <v-card-title class="pa-0 ma-0">
        <h2 class="mx-auto color-black" v-if="title">
          {{ title }}
        </h2>
      </v-card-title>
      <v-card-text>
        <slot></slot>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    isVisible: {
      type: Boolean,
      required: true
    },
    isPersistent: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    handleClose() {
      this.$emit('closeDialog')
    }
  }
}
</script>
<style>
/** */
</style>
