<template>
  <div class="flex-box container-box">
    <div class="content-box">
      <img src="@/assets/img/logo-aluguei-140x141.png" class="logo" />
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="email" label="E-mail" required></v-text-field>
        <v-text-field v-model="password" type="password" label="Senha" required></v-text-field>
        <h4 class="link left">Esqueci a senha</h4>
        <h4 class="link right" @click="register">Cadastrar</h4>
        <v-btn class="mr-4 btn-login" type="submit" :disabled="invalid"> Acessar </v-btn>
      </v-form>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    email: null,
    password: null,
    valid: null,
    invalid: null,
  }),
  methods: {
    register() {
      this.$store.commit("screen/updateSignin", false);
      this.$store.commit("screen/updateSignup1", true);
    },
  },
};
</script>
