<template>
  <div class="flex-box container-box">
    <div class="content-box scroll">
      <div class="flex">
        <img src="@/assets/img/backArrow.png" class="left-arrow" @click="goBack" />
      </div>
      <h2 class="h2">Cadastro</h2>
      <p class="p">3. Dados de Endereço</p>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="cep" :rules="cepRules" label="CEP" required></v-text-field>
        <v-select :items="state" label="Estado"></v-select>
        <v-select :items="gender" label="Cidade"></v-select>
        <v-text-field v-model="street" :rules="streetRules" label="Rua" required></v-text-field>
        <v-text-field v-model="neighborhood" :rules="neighborhoodRules" label="Bairro" required></v-text-field>
        <v-text-field v-model="number" :rules="numberRules" label="Nº" required></v-text-field>
        <v-text-field v-model="complement" :rules="complementRules" label="Complemento" required></v-text-field>
        <v-btn class="mr-4 btn-advanced" type="submit" :disabled="invalid" @click="goForward"> Avançar </v-btn>
      </v-form>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    state: [],
    city: [],
    valid: null,
    cep: null,
    street: null,
    neighborhood: null,
    number: null,
    complement: null,
  }),
  methods: {
    goBack() {
      this.$store.commit("screen/updateSignup2", true);
      this.$store.commit("screen/updateSignup3", false);
    },
    goForward() {
      this.$store.commit("screen/updateSignup3", false);
      this.$store.commit("screen/updateSignup4", true);
    },
  },
};
</script>
