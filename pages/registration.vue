<template>
  <v-app>
    <div class="background">
      <div v-if="signup1">
        <SignUp1 />
      </div>
      <div v-else-if="signup2">
        <SignUp2 />
      </div>
      <div v-else-if="signup3">
        <SignUp3 />
      </div>
      <div v-else-if="signup4">
        <SignUp4 />
      </div>
    </div>
  </v-app>
</template>
<script>
export default {
  computed: {
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
    },
  },
}
</script>
