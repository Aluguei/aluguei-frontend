<template>
  <div class='bg-linear-gradient'>
      <div v-if='signup1'>
        <SignUp1 />
      </div>
      <div v-else-if='signup2'>
        <SignUp2 />
      </div>
      <div v-else-if='signup3'>
        <SignUp3 />
      </div>
      <div v-else-if='signup4'>
        <SignUp4 />
      </div>
  </div>
</template>
<script>
import SignUp1 from '@/components/SignUp/SignUp1'
import SignUp2 from '@/components/SignUp/SignUp2'
import SignUp3 from '@/components/SignUp/SignUp3'
import SignUp4 from '@/components/SignUp/SignUp4'

export default {
  components: {
    SignUp1,
    SignUp2,
    SignUp3,
    SignUp4
  },
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
    }
  }
}
</script>
