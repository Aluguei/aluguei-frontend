<template>
  <div class="d-flex align-center justify-center">
    <div class="content-box">
      <div class="d-flex">
        <NuxtLink to="/">
          <img src="@/assets/img/icons/back-arrow.png" class="arrow cursor-pointer float-left" />
        </NuxtLink>
      </div>
      <h3 class="color-gray mb-4">Cadastro</h3>
      <p class="text-left">1. Dados para acesso</p>
      <v-text-field v-model="email" label="E-mail" required></v-text-field>
      <v-text-field v-model="password" label="Senha" required type="password"></v-text-field>
      <v-btn class="mr-4 btn mt-10 color-white" type="button" @click="goForward"> Avançar </v-btn>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    email: null,
    password: null,
  }),
  methods: {
    goBack() {
      this.$store.commit('screen/updateSignin', true);
      this.$store.commit('screen/updateSignup1', false);
    },
    goForward() {
      this.$store.commit('screen/updateSignup1', false);
      this.$store.commit('screen/updateSignup2', true);
    },
  },
};
</script>
