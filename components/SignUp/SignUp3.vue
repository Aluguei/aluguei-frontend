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
      <p class="text-left">3. Dados de Endereço</p>
      <v-text-field
        v-model="cep"
        v-mask="'#####.###'"
        label="CEP"
        required
      ></v-text-field>
      <v-select :items="state" label="Estado"></v-select>
      <v-select :items="gender" label="Cidade"></v-select>
      <v-text-field v-model="street" label="Rua" required></v-text-field>
      <v-text-field v-model="neighborhood" label="Bairro" required></v-text-field>
      <v-text-field v-model="number" label="Nº" required></v-text-field>
      <v-text-field v-model="complement" label="Complemento" required></v-text-field>
      <v-btn class="mr-4 btn mt-10 color-white" type="submit"> Avançar </v-btn>
    </div>
  </div>
</template>
<script>
import { mask } from "vue-the-mask";
export default {
  directives: { mask },
  data: () => ({
    state: [
      "AC",
      "AL",
      "AP",
      "AM",
      "BA",
      "CE",
      "DF",
      "ES",
      "GO",
      "MA",
      "MS",
      "MT",
      "MG",
      "PA",
      "PB",
      "PR",
      "PE",
      "PI",
      "RJ",
      "RN",
      "RS",
      "RO",
      "RR",
      "SC",
      "SP",
      "SE",
      "TO",
    ],
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
