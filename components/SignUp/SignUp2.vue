<template>
  <div class="d-flex align-center justify-center container-box">
    <div class="content-box scroll">
      <div class="d-flex">
        <img src="@/assets/img/icons/backArrow.png" class="arrow cursor-pointer float-left" @click="goBack" />
      </div>
      <h2>Cadastro</h2>
      <p class="text-left">2. Dados pessoais</p>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="name" :rules="nameRules" label="Nome" required></v-text-field>
        <v-text-field v-model="lastName" :rules="lastNameRules" label="Sobrenome" required></v-text-field>
        <v-text-field v-model="rg" :rules="rgRules" label="RG" required></v-text-field>
        <v-text-field v-model="cpf" :rules="cpfRules" label="CPF" required></v-text-field>
        <v-select :items="gender" label="Sexo"></v-select>

        <v-btn class="mr-4 btn mt-10 color-white" type="submit" :disabled="invalid" @click="goForward"> Avançar </v-btn>
      </v-form>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    gender: ["Masculino", "Feminino"],
    name: null,
    lastName: null,
    rg: null,
    cpf: null,
    valid: null,
  }),
  methods: {
    goBack() {
      this.$store.commit("screen/updateSignup1", true);
      this.$store.commit("screen/updateSignup2", false);
    },
    goForward() {
      this.$store.commit("screen/updateSignup2", false);
      this.$store.commit("screen/updateSignup3", true);
    },
  },
};
</script>
