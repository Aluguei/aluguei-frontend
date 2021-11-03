<template>
  <div class="d-flex align-center justify-center">
    <div class="content-box scroll">
      <div class="d-flex">
        <img
          src="@/assets/img/icons/back-arrow.png"
          class="arrow cursor-pointer float-left"
          @click="goBack"
        />
      </div>
      <h3 class="color-gray mb-4">Cadastro</h3>
      <p class="text-left">2. Dados pessoais</p>
      <v-text-field v-model="name" label="Nome" required></v-text-field>
      <v-text-field v-model="lastName" label="Sobrenome" required></v-text-field>
      <v-text-field v-model="rg" v-mask="'##.###.###-#'" label="RG" required></v-text-field>
      <v-text-field v-model="cpf" v-mask="'###.###.###-##'" label="CPF" required></v-text-field>
      <v-select :items="gender" label="Sexo"></v-select>
      <v-btn class="mr-4 btn mt-10 color-white" type="button" @click="goForward"> Avançar </v-btn>
    </div>
  </div>
</template>
<script>
import { mask } from 'vue-the-mask';
export default {
  directives: { mask },
  data: () => ({
    gender: ['Masculino', 'Feminino'],
    name: null,
    lastName: null,
    rg: null,
    cpf: null,
    valid: null,
  }),
  methods: {
    goBack() {
      this.$store.commit('screen/updateSignup1', true);
      this.$store.commit('screen/updateSignup2', false);
    },
    goForward() {
      this.$store.commit('screen/updateSignup2', false);
      this.$store.commit('screen/updateSignup3', true);
    },
  },
};
</script>
