<template>
  <div class="d-flex align-center justify-center container-box">
    <div class="content-box">
      <div class="d-flex">
        <NuxtLink to="/"> 
          <img src="@/assets/img/icons/backArrow.png" class="arrow cursor-pointer float-left"/>
        </NuxtLink>
      </div>
      <h2>Cadastro</h2>
      <p class="text-left">1. Dados para acesso</p>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
        <v-text-field v-model="password" :rules="passwordRules" label="Senha" required></v-text-field>
        <v-text-field v-model="emailConfirm" :rules="emailConfirmRules" label="Confirmar Senha" required></v-text-field>
        <v-btn class="mr-4 btn mt-10 color-white" type="submit" :disabled="invalid" @click="goForward"> Avançar </v-btn>
      </v-form>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    email: null,
    password: null,
    emailConfirm: null,
  }),
  methods: {
    goBack() {
      this.$store.commit("screen/updateSignin", true);
      this.$store.commit("screen/updateSignup1", false);
    },
    goForward() {
      this.$store.commit("screen/updateSignup1", false);
      this.$store.commit("screen/updateSignup2", true);
    },
  },
};
</script>
