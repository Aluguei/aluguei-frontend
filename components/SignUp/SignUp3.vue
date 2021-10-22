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
    clearFormCEP() {
      this.state = "";
      this.city = "";
      this.street = "";
      this.neighborhood = "";
      this.complement = "";
      this.number = "";
    },
    async searchCEP() {
      const valueCEP = this.cep.replace(/\D/g, "");
      if (valueCEP !== "") {
        const validacep = /^[0-9]{8}$/;
        if (validacep.test(valueCEP)) {
          try {
            const response = await this.$axios.$post(
              "https://viacep.com.br/ws/" + valueCEP + "/json/?callback=meu_callback"
            );
            return { response };
          } catch (error) {
            console.log(error);
          }
        } else {
          clearFormCEP();
          alert("Formato de CEP inválido.");
        }
      }
    },
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
