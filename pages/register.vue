<template>
  <div class="bg-linear-gradient">
    <v-form @submit.prevent="registerUser(login)">
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
    </v-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        email: null,
        password: null,
        passwordConfirmation: null,
        firstName: null,
        lastName: null,
        RG: null,
        CPF: null,
        gender: null,
        CEP: null,
        state: null,
        city: null,
        address: null,
        neighborhood: null,
        number: null,
        complement: null,
        phoneOne: null,
        phoneTwo: null,
      },
    };
  },
  computed: {
    signup1() {
      return this.$store.state.screen.signup1;
    },
    signup2() {
      return this.$store.state.screen.signup2;
    },
    signup3() {
      return this.$store.state.screen.signup3;
    },
    signup4() {
      return this.$store.state.screen.signup4;
    },
  },
  methods: {
    async registerUser(user) {
      try {
        await this.$axios.$post('/api/auth/register', {
          user,
        });
        this.$router.push('/');
      } catch (err) {
        console.error(err);
        this.snackbar = true;
      }
    },
  },
};
</script>
