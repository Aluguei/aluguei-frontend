<template>
  <v-card color="grey lighten-4" flat height="80px" tile>
    <v-toolbar dense>
      <div v-if="!signin" style="display: contents">
        <img src="~assets/svg/avatar-logo.svg" />
        <v-spacer></v-spacer>
        <h3 class="text-logo">Aluguei</h3>
      </div>
    </v-toolbar>
  </v-card>
</template>
<script>
export default {
  computed: {
    signin() {
      return this.$store.state.screen.signin
    },
    signup1() {
      return this.$store.state.screen.signup1
    },
    signup2() {
      return this.$store.state.screen.signup2
    },
    signup3() {
      return this.$store.state.screen.signup3
    },
    signup4() {
      return this.$store.state.screen.signup4
    }
  }
}
</script>
